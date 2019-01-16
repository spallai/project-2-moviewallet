var connection = require("../config/connection.js");

var orm = {

    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";

        connection.query(queryString, table, function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    selectOne: function(table, id, cb) {
        var queryString = "SELECT * FROM ?? WHERE id = ?";

        connection.query(queryString, [table, id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    selectSome: function(table, condition, id, cb) {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        connection.query(queryString, [table, condition, id], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    createMovie: function(title, imbdId, rating, genre, plot, actors, status, user_id, cb) {
        var queryString = "INSERT INTO movies SET title = ?, imdbId = ?, rating = ?, genre = ?, plot = ?, actors = ?, status = ?, user_id = ?";

        connection.query(queryString, [title, imbdId, rating, genre, plot, actors, status, user_id], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }, 

    createUser: function(username, password, cb) {
        var queryString = "INSERT INTO user SET username = ?, password = ?";

        connection.query(queryString, [username, password], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    createPlaylist: function(user_id, movie_id, name, description, cb) {
        var queryString = "INSERT INTO playlists SET user_id = ?, movie_id = ?, name = ?, description = ?";

        connection.query(queryString, [user_id, movie_id, name, description], function(err, result){
            if (err) throw err;
            cb(result);
        })
    },

    deletePlaylist: function(id, cb) {
        var queryString = "DELETE FROM playlists WHERE id = ?";

        connection.query(queryString, id, function(err, result){
            if (err) throw err;
            cb(result);
        });
    },

    updateMovieWatched: function(watched, id, cb) {
        var queryString = "UPDATE movies SET watched = ? WHERE id = ?";

        connection.query(queryString, [watched, id], function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    deleteMovie: function(id, cb) {
        var queryString = "DELETE FROM movies WHERE id = ?";

        connection.query(queryString, id, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }

}

// Export the orm object for the model.
module.exports = orm;
