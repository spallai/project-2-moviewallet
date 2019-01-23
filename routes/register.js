var connection = require("../config/connection.js");

var express = require("express");
var app = express.Router();
var expressValidator = require("express-validator");


app.get("/home", function(req, res, next){
    res.render('register', {title: "Registration"});
});

app.post("/home", function(req, res, next){
   
    // req.checkBody("username", "Username field cannot be empty.").notEmpty();
    // req.checkBody("username", "Username must be between 4-15 characters long.").len(4,15);
    // req.checkBody("email", "The email you entered is invalid, please try again.").isEmail();
    // req.checkBody("email", "The email address must be between 4-100 characters, please try again.").len(4,100);
    // req.checkBody("password", "Password must be between 4-100 characters long.").len(8,100);
    // req.checkBody("passwordMatch", "Password must be between 4 -100 characters long").len(8,100);
    // req.checkBody("passwordMatch", "Password does not match, please try again.").equals(req.body.password);

    // const errors = req.validationErrors();

    // if (errors) {
    //     console.log("errors: $(JSON.stringify(errors)}");

    //     res.render("register", {
    //         title:"Registration Error",
    //         errors: errors
    //     });
    // } else {
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        connection.query("INSERT INTO user (username, email, password) VALUES (?, ?, ?)", 
        [username, email, password], function(err, result, fields){

            if (err) throw err;

            var newUser = {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                id: result.insertId
            }
            req.session.user = newUser;
            console.log(newUser);        
            res.redirect("/feed.html");
        });
        

    // }
    });

module.exports = app;