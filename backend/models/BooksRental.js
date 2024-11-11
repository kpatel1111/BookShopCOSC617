const mongoose = require('mongoose');

const bookRentalSchema = new mongoose.Schema({
    userEmail: { type: String, ref: 'User', required: true }, 
    ISBN: { type: String, ref: 'Book', required: true }, 
    rentalDate: { type: Date, required: true },
    returnDate: { type: Date, required: true }
  });

const bookRentalModel = mongoose.model("Book Rental", bookRentalSchema);
module.exports = bookRentalModel;