var path = require("path");
var movie = require("../controllers/api_calls.js");


module.exports = function(app) {

    app.get("/imdb/random", function(req, res) {
        movie(function(result) {
            console.log(result);
            return res.json(result);
        });
    });
}
