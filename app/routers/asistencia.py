from fastapi import APIRouter

router = APIRouter(
    prefix="/asistencia",
    tags=["asistencia"]
)

@router.post("/registrar")
def registrar_asistencia():
    return {"message": "Asistencia registrada"}
