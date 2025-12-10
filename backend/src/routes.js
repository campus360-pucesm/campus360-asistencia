// This file is currently unused as routes are defined in index.js for simplicity.
// In a larger app, we would export a router here.
// Keeping this file if we decide to refactor later.

const express = require('express');
const router = express.Router();
const attendanceController = require('./controllers/attendanceController');

router.post('/scan', attendanceController.scanQR);
router.get('/reports', attendanceController.getReports);

module.exports = router;
