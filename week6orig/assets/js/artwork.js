let section = '';
let hashtag = '';
let artworkData = {data:[]};

window.addEventListener('DOMContentLoaded', function () {
    hashtag = $(location).attr('hash');
    loadData(hashtag);

    $("#about").click(function(){
        $("#about-sec").addClass("open-about");
        $("#about-sec").html("<h1 style='width: 40vw; margin: 0 auto; margin-top: 25vh;'>ABOUT</h1> <p style='width: 40vw; margin: 0 auto;'>This is an online repository showcasing digital art pieces that focus on the theme of digital space vs. real-world space <br><br>(click anywhere to go back)</p>");
        $("#about-sec").click(function(){
            $("#about-sec").empty();
            $("#about-sec").removeClass("open-about");
        });
    });
});

function loadData(hash) {
    $.getJSON("data.json", function (data) {
        artworkData = getArtworkData(data, hash);
        generateWebsites(artworkData);
    });
}

function generateWebsites(aData) {
    let source = $("#hbar-template").html();
    let template = Handlebars.compile(source);
    let result = template(aData);
    let list = $("#main-container");
    list.append(result);
}

function getArtworkData(data, hash){
    for (i in data.data){
        for (j in data.data[i]["artworks-info"]){
            if (data.data[i]["artworks-info"][j].code == hash){
                section = data.data[i]["artworks"];
                $("#artwork-type").css({"font-size": "calc(0.5rem + 1vw)", "background-color": "black", "color": "white"});
                $("#artwork-type").html(section);
                
                data = data.data[i]["artworks-info"][j];
                return data;
            }
        }
    }
}
