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
    }

}




// Export the orm object for the model.
module.exports = orm;
