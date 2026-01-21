const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = 8004;

app.use(cors());
app.use(express.json());

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const attendanceRoutes = require('./routers/attendanceRouter');
app.use('/api/attendance', attendanceRoutes);

app.get('/', (req, res) => {
  res.send('Attendance Module API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
