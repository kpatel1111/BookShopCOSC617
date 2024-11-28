const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema({
    userEmail: { type: String, ref: 'User', required: true }, 
    ISBN: { type: String, ref: 'Book', required: true } 
  });

const readingListModel = mongoose.model("Reading List", readingListSchema);
module.exports = readingListModel;