
const api = 'https://api.giphy.com/v1/gifs/search?q=';
const apiKey = '&api_key=NbkeYA73vYawk4C1tichQzt1eDDBlX6d';
const units = '&limit=20';
let searchTerm = ['generative-art', 'digital-art', 'new-media-art', 'net-art', 'mixed-reality', 'augmented-reality', 'virtual-reality'];

window.addEventListener('DOMContentLoaded', function () {
    loadLocalData();
    // show about page
    $("#about").click(function () {
        $("#about-sec").addClass("open-about");
        // *** clean this thing up : (
        $("#about-sec").html("<h1 style='width: 40vw; margin: 0 auto; margin-top: 25vh;'>ABOUT</h1> <p style='width: 40vw; margin: 0 auto;'>This is an online repository showcasing digital art pieces that focus on the theme of digital space vs. real-world space <br><br>(click anywhere to go back)</p>");
        $("#about-sec").click(function () {
            $("#about-sec").empty();
            $("#about-sec").removeClass("open-about");
        });
    });
    $("#experiment").click(function () {
        loadGifData();
    });
});

function loadLocalData() {
    $.getJSON("data.json", function (data) {
        generateWebsites(data);
    });
}

function loadGifData() {
    let search = Math.round(Math.random(searchTerm.length - 1));
    let apiCall = api + searchTerm[search] + apiKey + units;
    $.ajax({
        url: apiCall,
        type: "GET",
        dataType: "json",
        success: function (gifData) {
            $("#about-sec").addClass("open-about");
            $("#about-sec").html("<h1 style='width: 90vw; margin: 0 auto; margin-top: 5vh;'>EXPERIMENT</h1>");
            $("#about-sec").append("<div id='tagImgs' style='width: 90vw; height; 20vh; margin: 0 auto'></div>")
            for (var i = 1; i < gifData.data.length; i ++){
                $("#tagImgs").append("<img style='height: 20vh' src="+gifData.data[i].images.original.url+"></img>");
            }
            $("#about-sec").click(function () {
                $("#about-sec").empty();
                $("#about-sec").removeClass("open-about");
            });
            // console.log(gifData);
        }
    });
}

function generateWebsites(data) {
    let source = $("#hbar-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    let list = $(".artworks-list");
    list.append(result);
}

// *** add show artworks by genre to onclick
function buttonClick() {
    console.log("clicked");
}
// *** change color
function buttonMouseOver() {
    // var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // document.getElementById("buttons").style['background-color'] = color;
}
