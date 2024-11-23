const mongoose = require('mongoose');
const rentalSchema = new mongoose.Schema({
    isbnNumber: Int,
    userEmail: String,
    rentalDate: String,
    returnDate: String
});

const rentalModel = mongoose.model("bookRentals", rentalSchema);
module.exports = rentalModel;