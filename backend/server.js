const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/library')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

const UserSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
    email: String,
    password: String
});

const User = mongoose.model("users", UserSchema);

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (user.password === password) {
                res.json("Login Successful");
            } else {
                res.json("Incorrect Password entered");
            }
        } else {
            res.json("No user record found");
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

app.post("/register", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Registration failed" });
    }
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
