
$.get("/imdb/random", function (data) {

    if (data) {
        // console.log(data);
        var link = data.Trailer.split("=");
        // console.log(link);
        $("#trailer-box").attr("src", "https://www.youtube.com/embed/" + link[1] + "?autoplay=1");
        $("#title").text(data.Body.Title);

        $("#no-i").on("click", function (event) {
            data.Status = 2;
            console.log(data);
            $.post("/api/movies", data)
                .then(function () {
                    location.reload();
                });
        });
        $("#yes-i").on("click", function (event) {
            data.Status = 1;
            console.log(data);
            $.post("/api/movies", data)
                .then(function () {
                    location.reload();
                });
        });
        $("#maybe-i").on("click", function (event) {
            data.Status = 3;
            console.log(data);
            $.post("/api/movies", data)
                .then(function () {
                    location.reload();
                });
        });
        $("#info-i").on("click", function (event) {
            $("#poster").html("<img src = " + data.Body.Poster + ">");
            $("#title").text("Title: " + data.Body.Title);
            $("#genre").text("Genre: " + data.Body.Genre);
            $("#actors").text("Actors: " + data.Body.Actors);
            $("#year").text("Year: " + data.Body.Year);
            $("#plot").text("Plot: " + data.Body.Plot);
            $("#imdbLink").html("<p>Imdb Link: <a href = 'https://www.imdb.com/title/" + data.Body.imdbID + "/'>https://www.imdb.com/title/" + data.Body.imdbID + "/</a></p>");
            if($("#infoSpan").is(":hidden"))
                $("#infoSpan").show();
            else
                $("#infoSpan").hide();
        });

    } else {
        console.log("bad");
    }
});