from contextlib import asynccontextmanager
from dotenv import load_dotenv

# Load env vars before importing anything else that might depend on them
load_dotenv()

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import health, reports
from app.utils.db import prisma

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Connect to DB on startup
    await prisma.connect()
    print("✅ Connected to database")
    yield
    # Disconnect on shutdown
    await prisma.disconnect()
    print("✅ Disconnected from database")

app = FastAPI(
    title="CAMPUS360 - Attendance Module",
    description="Attendance Reporting API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS (Allowing all for dev, mirroring previous Express setup)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(health.router)
# Note: /scan is intentionally omitted as it is handled by Auth module
app.include_router(reports.router, prefix="/api/attendance")

@app.get("/")
def root():
    return {"message": "Attendance Module API is running (Python/FastAPI)"}
