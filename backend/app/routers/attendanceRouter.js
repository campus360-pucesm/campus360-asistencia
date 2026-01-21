// This file is currently unused as routes are defined in index.js for simplicity.
// In a larger app, we would export a router here.
// Keeping this file if we decide to refactor later.

const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

/**
 * @swagger
 * /api/attendance/scan:
 *   post:
 *     summary: Record a new attendance scan
 *     tags: [Attendance]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - locationCode
 *             properties:
 *               userId:
 *                 type: string
 *                 description: The user ID (UUID)
 *               locationCode:
 *                 type: string
 *                 description: The QR location code
 *     responses:
 *       201:
 *         description: Attendance recorded successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Server error
 */
router.post('/scan', attendanceController.scanQR);

/**
 * @swagger
 * /api/attendance/reports:
 *   get:
 *     summary: Get recent attendance reports
 *     tags: [Attendance]
 *     responses:
 *       200:
 *         description: List of access logs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   user_id:
 *                     type: string
 *                   location_code:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
 *       500:
 *         description: Server error
 */
router.get('/reports', attendanceController.getReports);

module.exports = router;
