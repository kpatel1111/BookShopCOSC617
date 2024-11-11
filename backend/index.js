
const { json } = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

const UserModel = require('./models/User.js');
const tableReservationModel = require('./models/TableReservation.js');
const readingListModel = require('./models/ReadingList.js');
const bookRentalModel = require('./models/BooksRental.js');
const bookModel = require('./models/Book.js');


app.get("/login", function(request, response){
    response.send("User Login");
    const { email, password } = request.body;
    UserModel.findOne({email: email})
    .then(user => {

    })
    .catch(error => {
        
    })
});



app.listen(3001);
