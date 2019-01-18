const random = require("random-words");
const request = require("request");
const search = require("youtube-search");

const opts = {
    maxResults: 1,
    key: "AIzaSyD3YavoUgzDzIoHvDU6v0xznu8FB9nTR0o"
}

var result = {};

function findMovie(cb){
    var movie = random();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&type=movie&apikey=b9ba7c90"; //change before going live

    //console.log(movie);
    
    request(queryURL, {json: true}, function(err, res, body) {
        if (err) throw err;
        // console.log(body);

//         if (body.Response === "False" && counter < 3){
//   //          console.log("Bad word");
//             findMovie();
//         } else if (body.Response === "True") {

//            console.log("Good word");

            // queryURL = "https://www.omdbapi.com/?i=" + body.Search[0].imdbID + "&apikey=b9ba7c90"; //change before going live

            // request(queryURL, {json: true}, function(err, res, body) {
            //     if (err) throw err;
            //     // console.log(body);

                if (body.Rated === "G" || body.Rated === "PG" || body.Rated === "PG-13" || body.Rated === "R") {
              //      console.log("Good movie");
            //        console.log(body);
                    result = {
                        Body: body,
                        Trailer: findTrailer(body.Title, body.Year,body, cb)
                    };
                    return(result);
                } else {
          //          console.log("Bad movie");
                    findMovie(cb);
                }
            })
        }
        // else {
        //     console.log("Timed out");
        // }
//     })
// }

function findTrailer(title, year, movieStuff, cb) {
    search(title + " trailer" + year, opts, function(err, results) {
        if (err) throw err;
        //console.log(results[0].link);
        result = {
            Body: movieStuff,
            Trailer: results[0].link
        }
        cb(result);
    })
}

// findMovie(function(result) {
//     console.log(result);
// });



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