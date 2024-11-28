
const { json } = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());

const UserModel = require('./models/User.js');
const tableReservationModel = require('./models/TableReservation.js');
const readingListModel = require('./models/ReadingList.js');
const bookRentalModel = require('./models/BooksRental.js');
const bookModel = require('./models/Book.js');


mongoose.connect("mongodb+srv://Deepak:Deepak@cosc617.xsp8q.mongodb.net/Bookstore")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));


// User Registration
app.post("/register", async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;
    try {
        const newUser = new UserModel({ name, email, password, phoneNumber });
        await newUser.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        res.status(400).send("Error registering user: " + error.message);
    }
});

// User Login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user && user.password === password) {
            res.send("Login successful");
        } else {
            res.status(401).send("Invalid email or password");
        }
    } catch (error) {
        res.status(500).send("Error logging in: " + error.message);
    }
});

// Add a New Book
app.post("/books", async (req, res) => {
    const { ISBN, title, author, edition } = req.body;
    try {
        const book = new BookModel({ ISBN, title, author, edition });
        await book.save();
        res.status(201).send("Book added successfully");
    } catch (error) {
        res.status(400).send("Error adding book: " + error.message);
    }
});

// Get All Books
app.get("/books", async (req, res) => {
    try {
        const books = await BookModel.find();
        res.json(books);
    } catch (error) {
        res.status(500).send("Error retrieving books: " + error.message);
    }
});

// Update a Book by ISBN
app.put("/books/:isbn", async (req, res) => {
    try {
        const updatedBook = await BookModel.findOneAndUpdate(
            { ISBN: req.params.isbn },
            req.body,
            { new: true }
        );
        if (updatedBook) {
            res.json(updatedBook);
        } else {
            res.status(404).send("Book not found");
        }
    } catch (error) {
        res.status(400).send("Error updating book: " + error.message);
    }
});

// Delete a Book by ISBN
app.delete("/books/:isbn", async (req, res) => {
    try {
        const deletedBook = await BookModel.findOneAndDelete({ ISBN: req.params.isbn });
        if (deletedBook) {
            res.send("Book deleted successfully");
        } else {
            res.status(404).send("Book not found");
        }
    } catch (error) {
        res.status(500).send("Error deleting book: " + error.message);
    }
});

// Add a Book to Reading List
app.post("/reading-list", async (req, res) => {
    const { userEmail, ISBN } = req.body;
    try {
        const readingListEntry = new ReadingListModel({ userEmail, ISBN });
        await readingListEntry.save();
        res.status(201).send("Book added to reading list");
    } catch (error) {
        res.status(400).send("Error adding to reading list: " + error.message);
    }
});

// Get Reading List by User
app.get("/reading-list/:userEmail", async (req, res) => {
    try {
        const readingList = await ReadingListModel.find({ userEmail: req.params.userEmail }).populate('ISBN');
        res.json(readingList);
    } catch (error) {
        res.status(500).send("Error retrieving reading list: " + error.message);
    }
});

// Record a Book Rental
app.post("/rent-book", async (req, res) => {
    const { userEmail, ISBN, rentalDate, returnDate } = req.body;
    try {
        const rental = new BookRentalModel({ userEmail, ISBN, rentalDate, returnDate });
        await rental.save();
        res.status(201).send("Book rental recorded");
    } catch (error) {
        res.status(400).send("Error renting book: " + error.message);
    }
});

// Get Rentals by User
app.get("/rentals/:userEmail", async (req, res) => {
    try {
        const rentals = await BookRentalModel.find({ userEmail: req.params.userEmail }).populate('ISBN');
        res.json(rentals);
    } catch (error) {
        res.status(500).send("Error retrieving rentals: " + error.message);
    }
});

// Make a Table Reservation
app.post("/reserve-table", async (req, res) => {
    const { userEmail, tableNumber, date, time } = req.body;
    try {
        const reservation = new TableReservationModel({ userEmail, tableNumber, date, time });
        await reservation.save();
        res.status(201).send("Table reserved successfully");
    } catch (error) {
        res.status(400).send("Error reserving table: " + error.message);
    }
});

// Get Reservations by User
app.get("/reservations/:userEmail", async (req, res) => {
    try {
        const reservations = await TableReservationModel.find({ userEmail: req.params.userEmail });
        res.json(reservations);
    } catch (error) {
        res.status(500).send("Error retrieving reservations: " + error.message);
    }
});

// Delete a Table Reservation
app.delete("/reservations/:reservationId", async (req, res) => {
    try {
        const deletedReservation = await TableReservationModel.findByIdAndDelete(req.params.reservationId);
        if (deletedReservation) {
            res.send("Reservation deleted successfully");
        } else {
            res.status(404).send("Reservation not found");
        }
    } catch (error) {
        res.status(500).send("Error deleting reservation: " + error.message);
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
