var path = require("path");
var movie = require("../controllers/api_calls.js");
var addMovie = require("../models/movies.js")


module.exports = function(app) {

    app.get("/imdb/random", function(req, res) {
        movie(function(result) {
            return res.json(result);
        });
    });

    app.post("/api/movies", function(req, res) {
        var newMovie = req.body;
        addMovie.create(newMovie.Body.Title, newMovie.Body.imdbID, newMovie.Body.Rated, newMovie.Body.Genre, newMovie.Body.Plot, newMovie.Body.Actors, newMovie.Body.Poster, newMovie.Status, 1, function(){
        });
        res.end();
    });
}
