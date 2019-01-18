//var data;

$.get("/imdb/random", function (result) {
    if (result) {
        const smartFill = (movStat, id) => {
            var retMov = {
                title: $(".trailer-box").attr("title"),
                imdbId: $(".trailer-box").attr("imdbId"),
                rating: $(".trailer-box").attr("rating"),
                genre: $(".trailer-box").attr("genre"),
                plot: $(".trailer-box").attr("plot"),
                actors: $(".trailer-box").attr("actors"),
                poster: $(".trailer-box").attr("poster"),
                status: movStat,
                user_id: id
            };
            return retMov;
        }

        const genMovie = () => {
            console.log("We be generatin'!")
            $(".trailer-box").attr("title", result.Body.Title);
            $(".trailer-box").attr("plot", result.Body.Plot);
            $(".trailer-box").attr("genre", result.Body.Genre);
            $(".trailer-box").attr("poster", result.Body.Poster);
            $(".trailer-box").attr("imdbId", result.Body.imdbId);
            $(".trailer-box").attr("actors", result.Body.Actors);
            $(".trailer-box").attr("rating", result.Body.Rated);
            var trailerSplit = result.Trailer.split("=");
            $(".trailer-box").attr("src", "https://www.youtube.com/embed/" + trailerSplit[1] + "?autoplay=1");
        }

        genMovie();

        //STATUS BREAKDOWN: 1 = YES, 2 = NO, 3 = MAYBE
        $("#yes").on("click", function () {
            var postData = smartFill(1, 1);

            $.ajax("/api/movies", {
                type: "POST",
                data: postData
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        })

        $("#no").on("click", function () {
            var postData = smartFill(2, 2);

            $.ajax("/api/movies", {
                type: "POST",
                data: postData
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        })

        $("#maybe").on("click", function () {
            var postData = smartFill(3, 3);

            $.ajax("/api/movies", {
                type: "POST",
                data: postData
            }).then(
                function () {
                    // Reload the page to get the updated list
                    location.reload();
                }
            );
        })

        $("#info").on("click", function () {
            $("#poster-section").attr("src", $(".trailer-box").attr("poster"));
            $("#title-text").text("Title: " + $(".trailer-box").attr("title"));
            $("#genre-text").text("Genre: " + $(".trailer-box").attr("genre"));
            $("#actors-text").text("Actors: " + $(".trailer-box").attr("actors"));
            $("#year-text").text("Release Year: " + $(".trailer-box").attr("year"));
            $("#imdb-link").attr("href", "" + + "/");
            $("#imdb-link").html("<p>Imdb Link: <a href='https://www.imdb.com/title/'" + $(".trailer-box").attr("imdbId") + "'/'>https://www.imdb.com/title/" + $(".trailer-box").attr("imdbId") + "/</a></p>");
            modal.style.display = "block";
        });

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.log("bad");
    }
});