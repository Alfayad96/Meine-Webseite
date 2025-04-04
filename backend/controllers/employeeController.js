// filepath: controllers/employeeController.js
const Employee = require('../models/Employee');
const multer = require('multer');
const path = require('path');

const employees = []; // Temporäre Datenbank

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

exports.upload = upload.single('photo');

exports.getAllEmployees = (req, res) => {
    res.status(200).json(employees);
};

exports.createEmployee = (req, res) => {
    const { name, position } = req.body;
    const newEmployee = { id: employees.length + 1, name, position };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
};