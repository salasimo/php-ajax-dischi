$(document).ready(function () {

    var source = $("#disco-template").html();
    var cardTemplate = Handlebars.compile(source);

    $("#ajax").click(function(){
        ajaxCall();
        $(".scelta-metodo").hide();
        $(".restart").show();
    });

    $("#php").click(function(){
        $(".scelta-metodo").hide();
        $(".restart").show();
        $(".wrapper-php").addClass("visible");
    });



    function ajaxCall(){
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
    };



}); //=========================
