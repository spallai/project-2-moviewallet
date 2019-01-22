var path = require("path");
var movie = require("../controllers/api_calls.js");
var addMovie = require("../models/movies.js")


module.exports = function(app) {

    app.get("/imdb/random", function(req, res) {
        movie(function(result) {
            console.log(result);
            return res.json(result);
        });
    });

    app.post("/api/movies", function(req, res) {
        var newMovie = req.body;
        console.log(newMovie.Status);
        addMovie.create(newMovie.Body.Title, newMovie.Body.imdbID, newMovie.Body.Rated, newMovie.Body.Genre, newMovie.Body.Plot, newMovie.Body.Actors, newMovie.Body.Poster, newMovie.Status, 1, function(){
            console.log("It worked?");
        });
        res.end();
    });

    

}
