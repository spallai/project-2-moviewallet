var connection = require("../config/connection.js");
var expressValidator = require("express-validator");
var express = require("express");

var app = express.Router();

app.post("/login", function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
  
    console.log(username, password);
  
    connection.query('SELECT id AND email AND username FROM user WHERE username = ? AND password = ?', [username, password], function (error, results) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        }
        else {
            if (results.length > 0) {
                var user =
                {
                    id: results[0].id,
                    username: results[0].username,
                    email: results[0].email
                };

                req.session.user = user;
                console.log("session user = " + req.session.user);
                console.log("password correct");
                
                res.redirect('/feed.html');
            }
            else {
                console.log("password wrong");

                res.redirect('/home.html');
            }
        }
    });
  });

module.exports = app;