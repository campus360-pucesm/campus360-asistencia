from fastapi import FastAPI
from app.routers import health, asistencia

app = FastAPI(
    title="CAMPUS360 - Asistencia",
    version="1.0.0",
)

app.include_router(health.router)
app.include_router(asistencia.router)

@app.get("/")
def root():
    return {"message": "CAMPUS360 microservice running"}
