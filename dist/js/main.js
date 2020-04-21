$(document).ready(function () {

    var source = $("#disco-template").html();
    var cardTemplate = Handlebars.compile(source);


    $.ajax({
        url: "server.php",
        method: "GET",
        success: function (data){
            for (var i = 0; i < data.length; i++) {
                var disco = data[i];
                var discoTemplate = {
                    album: disco.album,
                    artist: disco.artist,
                    year: disco.year,
                    cover: disco.cover
                }
            var discoCard = cardTemplate(discoTemplate);
            $('.container').append(discoCard);

            }
        },
        error: function (err){
            alert("Errore: " + err);
        }
    });


}); //=========================
