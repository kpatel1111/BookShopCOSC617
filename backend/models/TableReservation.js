const mongoose = require('mongoose');

const tableReservationSchema = new mongoose.Schema({
    userEmail: { type: String, ref: 'User', required: true },
    tableNumber: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true }
  });

const tableReservationModel = mongoose.model("Table Reservation", tableReservationSchema);
module.exports = tableReservationModel;