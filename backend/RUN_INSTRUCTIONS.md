# Instrucciones para iniciar el Backend (Python)

Has migrado exitosamente de Node.js a Python/FastAPI. Aquí tienes los pasos para probarlo localmente:

1.  **Abrir terminal en `backend/`**:
    ```powershell
    cd "c:/Users/ASUS/Desktop/Estudios Software/Quinto Semestre/Sistemas de Información/Campus360/campus360-att-main/backend"
    ```

2.  **Crear entorno virtual**:
    ```powershell
    python -m venv .venv
    ```

3.  **Activar entorno**:
    ```powershell
    .\.venv\Scripts\activate
    ```

4.  **Instalar dependencias**:
    ```powershell
    pip install -r requirements.txt
    ```

5.  **Generar Cliente Prisma** (Vital para que funcione la DB):
    ```powershell
    prisma generate
    ```

6.  **Iniciar Servidor**:
    ```powershell
    uvicorn app.main:app --reload --port 8004
    ```

### Endpoints Disponibles
- **Health**: `GET http://localhost:8004/health`
- **Reportes**: `GET http://localhost:8004/api/attendance/reports`
- **Docs**: `http://localhost:8004/docs`
