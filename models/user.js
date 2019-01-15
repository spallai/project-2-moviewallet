var orm = require("../config/orm.js");

var user = {
    create: function(username, password, cb) {
        orm.createUser(username, password, function(res){
            cb(res);
        });
    }
}

module.exports = user;