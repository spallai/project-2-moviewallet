var connection = require("../config/connection.js");

var orm = {

    selectByUserAndStatus: function(user,status, cb){
        var queryString = "SELECT * FROM movies WHERE user_id = ? && status = ?";
        connection.query(queryString, [user, status], function(err, result){
            if(err) throw err;
            cb(result);
        });
    },

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

    createMovie: function(title, imbdId, rating, genre, plot, actors, poster, status, user_id, cb) {
        var queryString = "INSERT INTO movies SET title = ?, imdbId = ?, rating = ?, genre = ?, plot = ?, actors = ?, poster = ?, status = ?, user_id = ?";
<<<<<<< HEAD

        // console.log("INSERT INTO movies SET title = " + title + " , imdbId = "+ imbdId+ ", rating = "+rating+", genre = "+ genre +", plot = "+plot+", actors = "+actors+", status = "+status+", user_id = "+user_id);
=======
>>>>>>> newfrontend
        connection.query(queryString, [title, imbdId, rating, genre, plot, actors, poster, status, 1], function(err, result) {
            if (err) throw err;
            console.log("did orm");
            // console.log(result);
            cb(result);
        });
    }, 
    // add % %around title to make sure thatany word with that part of letter or word is included in the search//

    createUser: function(username, pw, callback) {
        var queryString = "INSERT INTO user SET username = ?, password = ?";

        connection.query(queryString, [username, pw], function(err, result) {
            if (err) throw err;
            callback(result);
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
