const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    isbnNumber: Int,
    picture: String,
    title: String,
    author: String,
    edition: String,
});

const bookModel = mongoose.model("book", bookSchema);
module.exports = bookModel;