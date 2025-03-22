const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  jobTitle: String,
  bio: String,
  photoUrl: String,
});

module.exports = mongoose.model('Employee', employeeSchema);