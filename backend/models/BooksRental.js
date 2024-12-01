
const mongoose = require('mongoose');
const rentalSchema = new mongoose.Schema({
    isbnNumber: String,
    userEmail: String,
    rentalDate: String,
    returnDate: String
});

const rentalModel = mongoose.model("bookRentals", rentalSchema);
module.exports = rentalModel;