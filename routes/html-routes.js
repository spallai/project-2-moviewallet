var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        console.log("Feed session = ", req.session.user);
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}