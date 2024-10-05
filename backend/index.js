
const { json } = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());

app.get("/login", function(request, response){
    response.send("User Login");
});

app.listen(3001);
