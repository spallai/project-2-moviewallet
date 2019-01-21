var connection = require("../config/connection.js");

var express = require("express");

var app = express.Router();
var expressValidator = require("express-validator");

app.post("/login", function (req, res) {

    var username = req.body.username;
    var password = req.body.password;
  
    console.log(username, password);
  
    connection.query('SELECT email AND username FROM user WHERE username = ? AND password = ?', [username, password], function (error, results) {
        if (error) {
            console.log(error);
            res.send({
                "code": 400,
                "failed": "error ocurred"
            })
        }
        else {
            console.log(results);
            console.log("session = " + req.session);
            if (results.length == 0) {
                var user =
                {
                    username: results[0].username,
                    email: results[0].email
                };
                console.log("session = " + req.session);
                req.session.user = user;
            }
        }
    });
  
    res.redirect('/feed.html');
  });


module.exports = app;