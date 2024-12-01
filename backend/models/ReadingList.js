
const mongoose = require('mongoose');
const readingListSchema = new mongoose.Schema({
    isbnNumber: String,
    userEmail: String,
    picture: String
});

const readingListModel = mongoose.model("readingList", readingListSchema);
module.exports = readingListModel;