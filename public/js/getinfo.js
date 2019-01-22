
$.get("/imdb/random", function(data){
    
    if(data){
        var link = data.Trailer.split("=");
        $("#trailer-box").attr("src", "https://www.youtube.com/embed/" + link[1] + "?autoplay=1");
        $("#title").text(data.Body.Title);

        $("#no").on("click", function(event){
            $.post("/api/movies", data) 
            .done(function(data){
                console.log("Adding movie?");
            })
            .fail(function(){
                console.log("fail");
            })
            .always(function(){
                console.log("over");
            })
        });
    }else {
        console.log("bad");
    }
});