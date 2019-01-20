var connection = require("../config/connection.js");

var express = require("express");
var router = express.Router();
var expressValidator = require("express-validator");

router.get("/register", function(req, res, next){
    res.render('register', {title: "Registration"});
});

router.post("/register", function(req, res, next){
   
    // req.checkBody("username", "Username field cannot be empty.").notEmpty();
    // req.checkBody("username", "Username must be between 4-15 characters long.").len(4,15);
    // req.checkBody("email", "The email you entered is invalid, please try again.").isEmail();
    // req.checkBody("email", "The email address must be between 4-100 characters, please try again.").len(4,100);
    // req.checkBody("password", "Password must be between 8-100 characters long.").len(8,100);
    // req.checkBody("passwordMatch", "Password must be between 8 -100 characters long").len(8,100);
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

        connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", 
        [username, email, password], function(err, res, fields){
            if (err) throw err;

            res.render('register', {title: "Registration Complete"});
        });
    // }

    
});

module.exports = router;