
$.get("/imdb/random", function(data){
    
    if(data){
        console.log(data);
        var link = data.Trailer.split("=");
        console.log(link);
        $("#trailer").attr("src", "https://www.youtube.com/embed/" + link[1] + "?autoplay=1");
        $("#title").text(data.Body.Title);
    }else {
        console.log("bad");
    }
});