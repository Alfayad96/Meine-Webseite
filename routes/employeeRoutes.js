// filepath: routes/employeeRoutes.js
const express = require('express');
const { createEmployee, getEmployees, upload } = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, upload, createEmployee);
router.get('/', getEmployees);

module.exports = router;