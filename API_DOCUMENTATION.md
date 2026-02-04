# CAMPUS360 - Attendance Module API Documentation

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [URL Base](#url-base)
- [Endpoints](#endpoints)

  - [Obtener Reportes](#obtener-reportes)
- [Modelos de Datos](#modelos-de-datos)
- [Códigos de Error](#códigos-de-error)

---

## Descripción General

El módulo de asistencia CAMPUS360 es una API RESTful desarrollada en **Python (FastAPI)** que proporciona:


- **Reportes de Acceso** - Consulta de historial de entradas con detalles de usuario y ubicación

---

## URL Base

### Desarrollo
```
http://localhost:8004
```



---

## Endpoints



### Obtener Reportes

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

| 500 | Internal Server Error - Error de base de datos |
