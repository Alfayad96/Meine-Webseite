// filepath: c:\Users\mn512\OneDrive\Desktop\website\routes\packageRoutes.js
const express = require('express');
const { createPackage, getPackages } = require('../controllers/packageController');

const router = express.Router();

router.post('/', createPackage);
router.get('/', getPackages);

module.exports = router;