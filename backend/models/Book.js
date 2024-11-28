const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    ISBN: { type: String, unique: true, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    edition: { type: String }
  });

const bookModel = mongoose.model("Book", bookSchema);
module.exports = bookModel;