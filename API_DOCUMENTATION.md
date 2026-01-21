# CAMPUS360 - Attendance Module API Documentation

## 📋 Tabla de Contenidos

- [Descripción General](#descripción-general)
- [URL Base](#url-base)
- [Endpoints](#endpoints)
  - [Registrar Asistencia](#1-registrar-asistencia-scan)
  - [Obtener Reportes](#2-obtener-reportes)
- [Modelos de Datos](#modelos-de-datos)
- [Códigos de Error](#códigos-de-error)

---

## Descripción General

El módulo de asistencia CAMPUS360 es una API RESTful desarrollada en Node.js que proporciona:

- 📷 **Registro de Asistencia** - Simulación de escaneo QR y validación de ubicación
- 📊 **Reportes de Acceso** - Consulta de historial de entradas con detalles de usuario y ubicación

---

## URL Base

### Desarrollo
```
http://localhost:8004
```

### 📘 Documentación Interactiva (Swagger)
Puedes probar los endpoints directamente desde tu navegador:
```
http://localhost:8004/api-docs
```

---

## Endpoints

### 1. Registrar Asistencia (Scan)

Registra la asistencia de un estudiante mediante la simulación de un escaneo QR de ubicación.

**Endpoint:** `POST /api/attendance/scan`

**Autenticación:** No requerida (por el momento controlada internamente)

**Content-Type:** `application/json`

**Body (JSON):**

| Campo | Tipo | Requerido | Descripción |
|-------|------|-----------|-------------|
| userId | string (UUID) | Sí | ID del usuario que escanea |
| locationCode | string | Sí | Código de la ubicación (ej: "LAB-101") |
| timestamp | string (ISO) | No | Fecha y hora del evento (default: now) |

**Respuesta Exitosa (201):**

```json
{
  "message": "Attendance recorded successfully",
  "record": {
    "id": 15,
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "location_code": "LAB-101",
    "timestamp": "2024-01-21T10:00:00Z"
  }
}
```

**Ejemplo con JavaScript:**

```javascript
const response = await fetch('http://localhost:8004/api/attendance/scan', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    userId: '550e8400-e29b-41d4-a716-446655440000',
    locationCode: 'LAB-101'
  })
});

const data = await response.json();
```

---

### 2. Obtener Reportes

Obtiene el listado de los accesos registrados más recientes, incluyendo información detallada del usuario y la ubicación.

**Endpoint:** `GET /api/attendance/reports`

**Respuesta Exitosa (200):**

```json
[
  {
    "id": 15,
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "location_code": "LAB-101",
    "timestamp": "2024-01-21T10:00:00Z",
    "users": {
        "full_name": "Juan Pérez"
    },
    "locations": {
        "class_start": "09:00",
        "class_end": "11:00",
        "grace_period": 10
    }
  }
]
```

---

## Modelos de Datos

### AccessLog

```typescript
{
  id: number;              // ID autoincremental
  user_id: string;         // UUID del usuario FK
  location_code: string;   // Código de ubicación FK
  timestamp: string;       // ISO 8601 timestamp
  status: string;          // (Calculado) "Puntual", "Retraso", etc.
}
```

---

## Códigos de Error

| Código | Descripción |
|--------|-------------|
| 200 | OK - Petición exitosa |
| 201 | Created - Registro creado |
| 400 | Bad Request - Faltan datos (userId o locationCode) |
| 500 | Internal Server Error - Error de base de datos |
