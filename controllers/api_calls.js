const random = require("random-words");
const request = require("request");

var result = {};

function findMovie(cb) {
    var movie = random();
    console.log(movie);
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&type=movie&apikey=b9ba7c90"; //change before going live


    request(queryURL, { json: true }, function (err, res, body) {
        if (err) throw err;

        if (body.Rated === "G" || body.Rated === "PG" || body.Rated === "PG-13" || body.Rated === "R") {
            result = {
                Body: body,
                Trailer: findTrailer(body.Title, body.Year, body, cb)
            };
            console.log(result);
            return (result);
        } else {
            console.log("Bad movie");
            findMovie(cb);
        }
    })
}


function findTrailer(title, year, movieStuff, cb) {
    queryURLTrailer = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + title + "+trailer+" + year + "&type=video&key=AIzaSyBvj-rM-F-lhlYaGeXl8lZu-gNK4EdVoiQ"
    request(queryURLTrailer, { json: true }, function (err, res, body) {
        if (err) throw err;
        result = {
            Body: movieStuff,
            Trailer: body.items[0].id.videoId
        }
        cb(result);
    })
}


module.exports = findMovie;

/* The item exported is a function.
    To use this item type:
    var movie = require("Put file path to this file here");

    var data;

    movie(function(result){
        data = result;
    });

    data is now an object with all the information inside it.
*/