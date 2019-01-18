var path = require("path");

module.exports = function(app) {

    app.get("/", function(rew, res) {
        res.sendFile(path.join(__dirname, "../public/assets/html/test.html"));
    });

}
