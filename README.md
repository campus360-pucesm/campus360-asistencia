# CAMPUS360 Attendance - Module

Módulo de Gestión de Asistencia y Reportes para CAMPUS360, desarrollado con Node.js (Backend) y React (Frontend).
Este módulo permite el registro de asistencia mediante simulación de escaneo de códigos QR y la visualización de reportes de acceso.

## 📁 Estructura del Proyecto

```
campus360-att-main/
├── backend/                    # Backend Node.js + Express
│   ├── src/                    # Código fuente del servidor
│   │   ├── controllers/        # Controladores de lógica de negocio
│   │   └── index.js            # Punto de entrada y rutas
│   ├── .env                    # Variables de entorno (Supabase, Puerto)
│   └── package.json            # Dependencias Node (Express, Supabase)
│
├── frontend/                   # Frontend React + Vite
│   ├── src/                    # Código fuente de la UI
│   │   ├── components/         # Componentes (Reports, etc.)
│   │   ├── services/           # Conexión con API (Axios)
│   │   ├── App.jsx             # Layout principal
│   │   └── index.css           # Estilos globales y tema light
│   ├── package.json            # Dependencias Javascript
│   └── vite.config.js          # Configuración Vite
│
└── README.md                   # Este archivo
```

## 🚀 Inicio Rápido

### Backend (Puerto 3000)

```bash
cd backend

# Instalar dependencias
npm install

# Configurar variables de entorno
# Copia el archivo .env.example (si existe) o crea un .env con:
# PORT=3000
# SUPABASE_URL=tu_url
# SUPABASE_KEY=tu_key

# Iniciar servidor
npm start
```

El backend estará disponible en: **http://localhost:3000**
- API Scan: `POST /api/attendance/scan`
- API Reportes: `GET /api/attendance/reports`

### Frontend (Puerto 5173 - por defecto)

```bash
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El frontend estará disponible en: **http://localhost:5173** (o el puerto que indique Vite).

## 🔧 Configuración

### Backend (.env)

Asegúrate de tener un archivo `backend/.env` con las credenciales de tu proyecto Supabase:

```env
PORT=3000
SUPABASE_URL="https://tu-proyecto.supabase.co"
SUPABASE_KEY="tu-anon-key-publica"
```

### Frontend

La configuración de conexión con el backend está en `frontend/src/services/api.js`:
- Por defecto apunta a `http://localhost:3000/api/attendance`
- Si despliegas el backend en otro lugar, actualiza esta constante.

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
3. Usar `node src/index.js` o un gestor de procesos como PM2.

### Frontend
1. Ejecutar `npm run build` para generar la carpeta `dist`.
2. Servir los archivos estáticos generados.

## 👥 Equipo
Dev Principal: René Yasser Herrera Zambrano
Product Owner del módulo: John Steven Lopez Velez
Scrum Master asignado: Javier Antonio Artiles Veitia

CAMPUS360 - Módulo de Asistencia
