const mongoose = require('mongoose');
const readingListSchema = new mongoose.Schema({
    isbnNumber: Int,
    userEmail: String,
});

const readingListModel = mongoose.model("readingList", readingListSchema);
module.exports = readingListModel;