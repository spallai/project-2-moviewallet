var express = require("express");0
var router = express.Router();
var movie = require("../models/movies.js");

router.post("/api/movies", function(req, res){
    let sH = req.body.Body; //sh = short hand
    // console.log("controller " + sH.Rated);
    movie.create(sH.Title, sH.imdbID, sH.Rated, sH.Genre, sH.Plot, sH.Actors, sH.Poster, req.body.Status, req.body.user_id, function(results){
        console.log("ok, we're not idiots!");
    });
    res.end();
});

router.get("/api/movies", function(req, res){
    movie.all(function(data) {
        res.json(data);
    })
})

router.get("/api/movies/:id/:status", function(req,res){
    movie.viewByUserAndStatus(req.params.id, req.params.status, function(results){
        var hbsObject = {
            movies: results
        };
        res.json(hbsObject);
    });
});

module.exports = router;

// api routes:
// /wallet/maybe 
// // res.render("wallet", {
//     movies: [],
//     maybe:true
// // })

// /wallet/no 
// // res.render("wallet", {
//     movies: [],
//     no:true
// // })


// /wallet/yes
// // res.render("wallet", {
//     movies: [],
//     yes:true
// different things yes needs to have
// // })

// /wallet/playlists
// // res.render("wallet", {
//     movies: [],
//     playlists:true
// different things playlists needs to have
// // })