var path = require("path");

module.exports = function(app) {

    app.get("/", function(rew, res) {
        console.log("Feed session = " + rew.session);
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}