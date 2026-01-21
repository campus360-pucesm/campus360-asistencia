const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const attendanceController = require('./controllers/attendanceController');

dotenv.config();

const app = express();
const port = 8004;

app.use(cors());
app.use(express.json());

// Routes
const attendanceRoutes = require('./routers/attendanceRouter');
app.use('/api/attendance', attendanceRoutes);

app.get('/', (req, res) => {
  res.send('Attendance Module API is running');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
