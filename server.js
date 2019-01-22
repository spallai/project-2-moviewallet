var express = require("express");

var expressValidator = require("express-validator");

var PORT = process.env.PORT || 8080;

var cookieParser = require("cookie-parser");
var session = require("express-session");
// var session = require("cookie-session");
var morgan = require("morgan");

var app = express();
app.use(expressValidator()); 
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/html-routes.js")(app);
require("./routes/imdb-routes.js")(app);

app.use(morgan("dev"));
app.use(cookieParser(app));
app.use(session({secret: 'anystringoftext',
                 saveUninitialized: true,
                 resave: false,
                 cookie: {secure: "auto"}
                }));

// Import routes and give the server access to them.
var register = require("./routes/register");
app.use(register);

var login = require("./routes/login");
app.use(login);

var movies = require("./controllers/movie_controller.js");
app.use(movies);

app.use("/", function(req, res) {
  console.log(req.session);
})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});