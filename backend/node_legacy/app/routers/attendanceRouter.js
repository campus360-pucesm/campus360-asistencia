

const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');


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
