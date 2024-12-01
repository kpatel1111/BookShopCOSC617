
const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    userEmail: String,
    date: String,
    time: String,
    tableNumber: String
});

const ReservationModel = mongoose.model("tablereservations", ReservationSchema);
module.exports = ReservationModel;