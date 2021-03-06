var orm = require("../config/orm.js");

var movie = {

    all: function(cb) {
        orm.selectAll("movies", function(res){
            cb(res);
        });
    },

    viewOne: function(id, cb) {
        orm.selectOne("movies", id, function(res){
            cb(res);
        });
    },

    viewSome: function(column, condition, cb) {
        orm.selectSome("movies", column, condition, function(res){
            cb(res);
        });
    },

    viewByUserAndStatus: function(user, status, cb){
        orm.selectByUserAndStatus(user, status, function(res){
            cb(res);
        });
    },

    create: function(title, imdbId, rating, genre, plot, actors, poster, status, user_id, cb) {
        console.log("model rating: " + rating);
        orm.createMovie(title, imdbId, rating, genre, plot, actors, poster, status, user_id, function(res){
            console.log("did model");
            cb(res);
        })
    },

    watched: function(id, cb) {
        orm.updateMovieWatched(true, id, function(res){
            cb(res);
        })
    },

    delete: function(id, cb) {
        orm.deleteMovie(id, function(res){
            cb(res);
        })
    }
    
}

module.exports = movie;