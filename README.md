# CAMPUS360 Attendance - Module

Módulo de Gestión de Asistencia y Reportes para CAMPUS360, desarrollado con Node.js (Backend) y React (Frontend).
Este módulo permite el registro de asistencia mediante simulación de escaneo de códigos QR y la visualización de reportes de acceso.

> **📖 Documentación de API:** Consulta [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) para detalles de endpoints.

## 📁 Estructura del Proyecto

```
campus360-att-main/
├── backend/                    # Backend Node.js + Express
│   ├── app/                    # Código fuente del servidor
│   │   ├── controllers/        # Controladores de lógica de negocio
│   │   ├── routers/            # Definición de rutas
│   │   └── index.js            # Punto de entrada y rutas
│   ├── .env                    # Variables de entorno (Supabase, Puerto)
│   └── package.json            # Dependencias Node (Express, Supabase)
│
└── README.md                   # Este archivo
```

## 🚀 Inicio Rápido

### Backend (Puerto 8004)

```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
# Copia el archivo .env.example (si existe) o crea un .env con:
# PORT=8004
# SUPABASE_URL=tu_url
# SUPABASE_KEY=tu_key

# Iniciar servidor
npm run dev
```

El backend estará disponible en: **http://localhost:8004**
- Documentación API: `http://localhost:8004/api-docs`
- API Scan: `POST /api/attendance/scan`
- API Reportes: `GET /api/attendance/reports`

### Frontend

El frontend de este módulo se encuentra integrado en el repositorio principal de la aplicación web: **`campus360-web-app`**.
Por favor, sigue las instrucciones de ese repositorio para iniciar la interfaz de usuario.

## 🔧 Configuración

### Backend (.env)

Asegúrate de tener un archivo `backend/.env` con las credenciales de tu proyecto Supabase:

```env
PORT=8004
SUPABASE_URL="https://tu-proyecto.supabase.co"
SUPABASE_KEY="tu-anon-key-publica"
```



## 📝 Funcionalidades Clave

### 1. Panel de Reportes
- Visualización de tabla con todos los registros de asistencia.
- Datos mostrados: **Nombre del Estudiante**, Ubicación, Fecha y Hora.
- Contador total de registros.
- Diseño **"Light Mode"** limpio y responsivo (coherente con el módulo de Auth).

### 2. Simulación de Escaneo (Test Mode)
- Botón **"+ Simulate Scan"** en la interfaz para pruebas rápidas.
- Utiliza el **ID de un estudiante existente** (simulado) para registrar una asistencia real válida.
- Selecciona una ubicación al azar (LAB-101, BIBLIOTECA, etc.) y envía la petición al backend inmediatamente.

## 🛠️ Tecnologías

**Backend:**
- Node.js
- Express.js
- @supabase/supabase-js (Cliente oficial)
- CORS & Dotenv

**Frontend:**
- React 19
- Vite
- Axios (Cliente HTTP)
- Lucide React (Íconos)
- Vanilla CSS (Diseño personalizado)

## 📦 Despliegue

### Backend
1. Ejecutar `npm install`.
2. Configurar variables de entorno de producción.
3. Usar `node app/index.js` o un gestor de procesos como PM2.



## 👥 Equipo
Dev Principal: René Yasser Herrera Zambrano
Product Owner del módulo: John Steven Lopez Velez
Scrum Master asignado: Javier Antonio Artiles Veitia

CAMPUS360 - Módulo de Asistencia
