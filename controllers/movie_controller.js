var express = require("express");0
var router = express.Router();
var movie = require("../models/movies.js");

router.post("/api/movies", function(req, res){
    let sH = req.body.Body; //sh = short hand
    movie.create(sH.Title, sH.imdbID, sH.Rating, sH.Genre, sH.Plot, sH.Actors, sH.Poster, req.body.Status, req.body.user_id, function(results){
        console.log("ok, we're not idiots!");
    });
});

router.get("/api/movies/:id/:status", function(req,res){
    movie.viewByUserAndStatus(req.params.id, req.params.status, function(results){
        var hbsObject = {
            movies: results
        };
        res.render("", hbsObject);
    });
});

module.exports = router;