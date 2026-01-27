from fastapi import APIRouter
from app.utils.db import prisma

router = APIRouter()

@router.get("/health", tags=["Health"])
async def health_check():
    # Simple DB check
    try:
        # We can just check if client is connected or run a simple query
        if prisma.is_connected():
            return {"status": "healthy", "database": "connected"}
        return {"status": "degraded", "database": "disconnected"}
    except Exception:
        return {"status": "unhealthy"}
