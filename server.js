var express = require("express");

var expressValidator = require("express-validator");

var PORT = process.env.PORT || 8080;

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

// Import routes and give the server access to them.


var register = require("./routes/register.js");
app.use(register);

var routes = require("./controllers/movie_controller.js");
app.use(routes);


require("./routes/html-routes.js")(app);
require("./routes/imdb-routes.js")(app);
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
