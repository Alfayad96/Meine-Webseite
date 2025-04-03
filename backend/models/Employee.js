// filepath: models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Employee', employeeSchema);