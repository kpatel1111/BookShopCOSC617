
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require("bcrypt");
const UserModel = require('./models/User.js');
const BookModel = require("./models/Book.js");
const RentalModel = require("./models/BooksRental.js");
const ReservationModel = require("./models/TableReservation.js");
const ReadingListModel = require("./models/ReadingList.js");
const { ObjectId } = require('mongodb');
const { ReadMoreOutlined } = require('@mui/icons-material');
const app = express();
app.use(express.json());
app.use(cors({
    origin: "https://starlit-frangipane-ba4816.netlify.app",  // Frontend URL in production
}));

mongoose.connect("mongodb+srv://kpatel43:IETDho3RBJDA7Lmi@bookshop.zkpqa.mongodb.net/?retryWrites=true&w=majority&appName=bookshop");

app.post("/register", function (request, response) {
    const { name, phoneNumber, email, password } = request.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                response.status(200).json("The email address is already registered. Please input another email address.");
            }
            else {
                UserModel.create({ name: name, phoneNumber: phoneNumber, email: email, password: hashedPassword })
                    .then(user => {
                        response.status(200).json(user)
                    })
                    .catch(error => response.status(400).json(error))
            }
        })
        .catch(error => response.status(400).json(error))
});

app.post("/login", function (request, response) {
    const { email, password } = request.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                const match = bcrypt.compareSync(password, user.password);
                if (match) {
                    response.status(200).json("Login Successful");
                }
                else {
                    response.status(200).json("Incorrect Password entered");
                }
            }
            else {
                response.status(200).json("No user record found");
            }
        })
        .catch(error => response.status(400).json(error))
});

app.post("/updateProfile", function (request, response) {
    const { id, name, phone, password } = request.body;
    var keyQuery = { _id: id };
    if (phone === "") {
        var updateQuery = { $set: { password: password } };
        UserModel.findByIdAndUpdate(keyQuery, updateQuery)
            .then(user => response.status(200).json(user))
            .catch(error => response.status(400).json(error))
    }
    else if (password === "") {
        var updateQuery = { $set: { phoneNumber: phone } };
        UserModel.findByIdAndUpdate(keyQuery, updateQuery)
            .then(user => response.status(200).json(user))
            .catch(error => response.status(400).json(error))
    } else if (phone !== "" && password !== "") {
        var updateQuery = { $set: { phoneNumber: phone, password: password } };
        UserModel.findByIdAndUpdate(keyQuery, updateQuery)
            .then(user => response.status(200).json(user))
            .catch(error => response.status(400).json(error))
    }
});

app.post("/getUser", function (request, response) {
    const { email } = request.body;
    UserModel.findOne({ email: email })
        .then(user => { response.status(200).json(user) })
        .catch(err => response.status(400).json(err))

});

app.post("/getReadingList", (request, response) => {
    const { email } = request.body;
    ReadingListModel.find({ userEmail: email })
        .then(isbnNumber => response.status(200).json(isbnNumber))
        .catch(err => response.status(400).json(err))

});

app.post("/getBookDetails", (request, response) => {
    const { isbnNumber } = request.body;
    BookModel.findOne({ isbnNumber: isbnNumber })
        .then(book => {
            response.status(200).status(200).json(book);
        })
        .catch(err => response.status(400).json(err))
});

app.post("/getBooks", (request, response) => {
    BookModel.find()
        .then(books => response.status(200).json(books))
        .catch(err => response.status(400).json(err))
});

app.post("/addReadingList", (request, response) => {
    const { email, isbnNumber, picture } = request.body;
    ReadingListModel.findOne({ userEmail: email, isbnNumber: isbnNumber })
        .then(readingListBook => {
            if (readingListBook) {
                response.status(200).json("The book is already added to the reading list. Please try to add another book to the reading list.");
            }
            else{
            ReadingListModel.create({ isbnNumber: isbnNumber, userEmail: email, picture: picture })
            .then(readingList => response.status(200).json(readingList))
            .catch(err => { response.status(400).json(err) })
            }
        })
        .catch(err => { response.status(400).json(err) })
});

app.post("/getOneBook", (request, response) => {
    const { isbnNumber } = request.body;
    BookModel.findOne({ isbnNumber: isbnNumber })
        .then(book => response.status(200).json(book))
        .catch(err => response.status(400).json(err))
});

app.post("/bookRentalProcess", function (request, response) {
    const { isbnNumber, userEmail, rentalDate, returnDate } = request.body;
    RentalModel.findOne({ isbnNumber: isbnNumber })
        .then(rental => {
            if (rental) {
                response.status(200).json("The book is not available to rent. Please rent another book from the collection.");
            }
            else {
                const bookRentalDetails = { isbnNumber: isbnNumber, userEmail: userEmail, rentalDate: rentalDate, returnDate: returnDate };
                RentalModel.create(bookRentalDetails)
                    .then(confirm => response.status(200).json(confirm))
                    .catch(err => response.status(400).json(err))
            }
        })
        .catch(err => { response.status(400).json(err) })
});

app.post("/readingSessionReservationProcess", function (request, response) {
    const { userEmail, date, time, tableNumber } = request.body;
    ReservationModel.findOne({ date: date, tableNumber: tableNumber })
        .then(reservation => {
            if (reservation) {
                response.status(200).json("The table is not available for the reading session. Please reserve another table.");
            }
            else {
                const reservationDetails = { userEmail: userEmail, date: date, time: time, tableNumber: tableNumber };
                ReservationModel.create(reservationDetails)
                    .then(confirm => response.status(200).json(confirm))
                    .catch(err => response.status(400).json(err))
            }
        })
        .catch(err => { response.status(400).json(err) })
});

app.post("/getRentalHistory", (request, response) => {
    const { email } = request.body;
    RentalModel.find({ userEmail: email })
        .then(book => response.status(200).json(book))
        .catch(err => response.status(400).json(err))
});

app.post("/getReservationHistory", (request, response) => {
    const { email } = request.body;
    ReservationModel.find({ userEmail: email })
        .then(book => response.status(200).json(book))
        .catch(err => response.status(400).json(err))
});

app.listen(3001);
