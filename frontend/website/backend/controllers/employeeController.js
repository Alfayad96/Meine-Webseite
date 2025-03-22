const Employee = require('../models/Employee');
const multer = require('multer');
const path = require('path');

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

exports.createEmployee = async (req, res) => {
  const { name, jobTitle, bio } = req.body;
  const photoUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const employee = new Employee({ name, jobTitle, bio, photoUrl });
  await employee.save();
  res.status(201).send('Employee created');
};

exports.getEmployees = async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
};