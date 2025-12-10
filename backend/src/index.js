const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const attendanceController = require('./controllers/attendanceController');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.post('/api/attendance/scan', attendanceController.scanQR);
app.get('/api/attendance/reports', attendanceController.getReports);

app.get('/', (req, res) => {
  res.send('Attendance Module API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
