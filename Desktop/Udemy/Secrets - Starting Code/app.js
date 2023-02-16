require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');
const encrypt = require("mongoose-encryption")

const app = express();



app.set('view engine', 'ejs');

console.log(process.env.API_KEY)

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1/userDB", { useNewUrlParser: true });

//this is the schema that we use for the simple model
// const userSchema = {
//     email: String,
//     password: String
// }

///if we using encryption, we need to define the schema using new keyword

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})

userSchema.plugin(encrypt , {secret : process.env.SECRET , encryptedFields : ["password"]});
//EncyptedFields is defining that I want only password field to be encrypted;
const User = new mongoose.model("User", userSchema);



app.get('/', function (req, res) {
    res.render("Home");
})

app.get('/login', function (req, res) {
    res.render("Login");
})
app.get('/register', function (req, res) {
    res.render("Register");
})

app.post('/register', function (req, res) {

    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });

    newUser.save(function (err) {
        if (err) {
            console.log("there is error");

        }
        else {
            res.render("secrets");
        }

    });

})

app.post('/login', function (req, res) {

    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ email: username }, function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            if (user) {
                if (user.password === password) {
                    res.render("secrets");
                }
            }
        }
    })


})




app.listen(3000, function (req, res) {
    console.log("Server is running on port 3000");
})
