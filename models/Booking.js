const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customerName: String,
  packageId: mongoose.Schema.Types.ObjectId,
  date: Date,
  status: String,
});

module.exports = mongoose.model('Booking', bookingSchema);