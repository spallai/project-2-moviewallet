// var express = require("express");
// var session = require("express-session");

// var app = express.Router();

// // fake database information
// var users = require("../routes/register.js")


// app.get("/", function(req, res) {
//   // check for session first
//   if (req.session.user) {
//     res.send(`welcome back, ${req.session.user.name}. are you still ${req.session.user.age} years old?`);
//   }
//   // then check for cookie
//   else if (req.headers.cookie && req.headers.cookie.indexOf("token=") !== -1) {
//     // use regex to grab cookie from headers string
//     var cookie = req.headers.cookie.match(/(?<=token=)[^ ;]*/)[0];
//     // compare cookie against db records
//     for (var i = 0; i < users.length; i++) {
//       if (users[i].token === cookie) {  
//         // save user object on session for back-end to continue to use
//         req.session.user = users[i];
  
//         return res.redirect("/");
//       }
//     }

//     // no match, so clear cookie
//     res.clearCookie("token");
//     res.redirect("/");
//   }
//   // if no session or cookie, send initial login form
//   else {
//     res.send(`
//       <form method='POST' action='/login'>
//         <input type='text' name='username' />
//         <input type='password' name='password' /> 
//         <input type='submit' value='Submit' /> 
//       </form>
//     `);
//   }
// });

// app.get("/other", function(req, res) {
//   // only users with a session can see this route
//   if (req.session.user) {
//     res.send(`oh, it's ${req.session.user.name} again.`);
//   }
//   else {
//     res.redirect("/");
//   }
// });

// app.get("/logout", function(req, res) {
//   // clear cookie and session
//   res.clearCookie("token");
//   req.session.destroy();

//   res.redirect("/");
// });

// app.post("/login", function(req, res) {
//   // look for user that matches the posted username and password
//   // in a real app, this would be a db query
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].name === req.body.username && users[i].password === req.body.password) {
//       // create random token and "save" in fake database
//       var token = "t" + Math.random();
//       users[i].token = token;

//       // also set token as a cookie that browser can read
//       // cookie expires 999999999 milliseconds later
//       res.cookie("token", token, {expires: new Date(Date.now() + 999999999)});

//       // save user object on session for back-end to continue to use
//       req.session.user = users[i];

//       return res.redirect("/");
//     }
//   }

//   // if for loop never returned, username and/or password was wrong
//   res.send("account not found");
// });

// module.exports = user;