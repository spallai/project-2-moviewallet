// Set up MySQL connection.
var mysql = require("mysql");
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

var connection = mysql.createConnection({
  host: config.host,
  port: 3306,
  user: config.username,
  password: config.password, 
  database: config.database
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
