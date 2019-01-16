var orm = require("../config/orm.js");

var playlist = {

    all: function(cb) {
        orm.selectAll("playlists", function(res){
            cb(res);
        })
    },

    viewOne: function(id, cb) {
        orm.selectOne("playlists", id, function(res){
            cb(res);
        });
    },

    viewSome: function(column, condition, cb) {
        orm.selectSome("playlists", column, condition, function(res){
            cb(res);
        });
    }



}

module.exports = playlist;