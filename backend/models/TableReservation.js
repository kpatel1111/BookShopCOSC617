const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    userEmail: String,
    date: String,
    time: String,
    tableNumber: Int
});

const ReservationModel = mongoose.model("tablereservations", ReservationSchema);
module.exports = ReservationModel;