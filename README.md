# CAMPUS360 Attendance - Module

Módulo de Gestión de Asistencia y Reportes para CAMPUS360, desarrollado con Node.js (Backend) y React (Frontend).
Este módulo permite la visualización de reportes de acceso y gestión de datos de asistencia.

> **Documentación de API:** Consulta [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) para detalles de endpoints.

## Estructura del Proyecto

```
campus360-att-main/
├── backend/                    # Backend Python (FastAPI)
│   ├── app/                    # Código fuente del servidor
│   │   ├── core/               # Configuración (Env vars)
│   │   ├── routers/            # Endpoints (Reports, Health)
│   │   ├── utils/              # Utilidades (DB Connection)
│   │   └── main.py             # Punto de entrada
│   ├── prisma/                 # Esquema de Base de Datos
│   ├── .env                    # Variables de entorno
│   └── requirements.txt        # Dependencias Python
│
└── README.md                   # Este archivo
```

## Inicio Rápido

### Backend (Puerto 8004)

```powershell
cd backend

# 1. Crear entorno virtual
python -m venv .venv

# 2. Activar entorno
.\.venv\Scripts\activate

# 3. Instalar dependencias
pip install -r requirements.txt

# 4. Generar cliente de Base de Datos
prisma generate

# 5. Configurar .env (Ver sección Configuración)

# 6. Iniciar servidor
uvicorn app.main:app --reload --port 8004
```

El backend estará disponible en: **http://localhost:8004**


- API Reportes: `GET /api/attendance/reports`

### Frontend

El frontend de este módulo se encuentra integrado en el repositorio principal de la aplicación web: **`campus360-web-app`**.
Por favor, sigue las instrucciones de ese repositorio para iniciar la interfaz de usuario.

## Configuración

### Backend (.env)

Asegúrate de tener un archivo `backend/.env` con las credenciales de tu proyecto Supabase:

```env
DATABASE_URL="postgresql://postgres.[proyecto]:[password]@aws-0-us-west-2.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.[proyecto]:[password]@aws-0-us-west-2.pooler.supabase.com:5432/postgres"
```
> **Nota:** Es vital usar la Connection String del **Pooler** (puerto 6543) para entornos Serverless/FastAPI.



## Funcionalidades Clave

### 1. Panel de Reportes
- Visualización de tabla con todos los registros de asistencia.
- Datos mostrados: **Nombre del Estudiante**, Ubicación, Fecha y Hora.
- Contador total de registros.
- Diseño **"Light Mode"** limpio y responsivo (coherente con el módulo de Auth).



## Tecnologías

**Backend:**
- Python 3.10+
- FastAPI (Framework web de alto rendimiento)
- Prisma ORM (Manejo de Base de Datos)
- Uvicorn (Servidor ASGI)
- Pydantic (Validación de datos)

**Frontend:**
- React 19
- Vite
- Axios (Cliente HTTP)
- Lucide React (Íconos)
- Vanilla CSS (Diseño personalizado)

## Despliegue

### Backend
1. Ejecutar `pip install -r requirements.txt`.
2. Generar cliente `prisma generate`.
3. Configurar variables de entorno de producción (`DATABASE_URL`).
4. Usar `uvicorn app.main:app --host 0.0.0.0 --port 8004` o Gunicorn.



## Equipo
Dev Principal: René Yasser Herrera Zambrano
Product Owner del módulo: John Steven Lopez Velez
Scrum Master asignado: Javier Antonio Artiles Veitia

CAMPUS360 - Módulo de Asistencia
