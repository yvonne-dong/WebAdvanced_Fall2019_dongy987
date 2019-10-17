
const api = 'https://api.giphy.com/v1/gifs/search?q=';
const apiKey = '&api_key=NbkeYA73vYawk4C1tichQzt1eDDBlX6d';
const units = '&limit=20';
let searchTerm = ['generative-art', 'digital-art', 'new-media-art', 'net-art', 'mixed-reality', 'augmented-reality', 'virtual-reality'];

let artworkData = [];

window.addEventListener('DOMContentLoaded', function () {
    loadLocalData();
    console.log(artworkData);
    $(function () {
        $('.scrollbar').hover(function () {
            $("#introL").addClass("open");
            $("#introL").addClass($(this).attr('id'));
            $("#introR").addClass("open");
            $("#introR").addClass($(this).attr('id'));
            let scrollIdx = $(this).attr('id');
            $('.artwork-container').hover(function () {
                let idx = $(this).attr('id');

                if (scrollIdx != "group3") {
                    $("#introL").empty();
                    $("#introR").html("<div id='info' style='margin-left: 2vw; margin-top: 20vh;'>"
                        + "<h1 style='margin-left: -5px'>" + artworkData[idx].title + "</h1>"
                        + "<h2>" + artworkData[idx].artist + "</h2>"
                        + "<h2>" + artworkData[idx].year + "</h2>"
                        + "<h2>" + artworkData[idx].artform + "</h2>"
                        + "</div>");
                } else {
                    $("#introR").empty();
                    $("#introL").html("<div id='info' style='text-align: right; margin-right: 2vw; margin-top: 20vh;'>"
                        + "<h1 style='margin-right: 5px'>" + artworkData[idx].title + "</h1>"
                        + "<h2>" + artworkData[idx].artist + "</h2>"
                        + "<h2>" + artworkData[idx].year + "</h2>"
                        + "<h2>" + artworkData[idx].artform + "</h2>"
                        + "</div>");
                }
            },
                function () {
                    $("#introL").empty();
                    $("#introR").empty();
                });
        },
            function () {
                // $("#introL").empty();
                // $("#introR").empty();
                $("#introL").removeClass("open");
                $("#introL").removeClass($(this).attr('id'));
                $("#introR").removeClass("open");
                $("#introR").removeClass($(this).attr('id'));
            });
    });

    // show about page
    $("#about").click(function () {
        $("#about-sec").addClass("open-about");
        // *** clean this thing up : (
        $("#about-sec").html("<h1 style='width: 40vw; margin: 0 auto; margin-top: 25vh;'>ABOUT</h1> <h2 style='width: 40vw; margin: 0 auto;'>This is an online repository showcasing digital art pieces that focus on the theme of digital space vs. real-world space <br><br>(click anywhere to go back)</h2>");
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
        for (i in data.data) {
            for (j in data.data[i]["artworks-info"]) {
                let info = {};
                section = data.data[i]["artworks-info"][j];
                info.title = section.title;
                info.artist = section.content.artist;
                info.year = section.content.year;
                info.artform = section.content.artform;
                artworkData.push(info);
            }
        }
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
            for (var i = 1; i < gifData.data.length; i++) {
                $("#tagImgs").append("<img style='height: 20vh' src=" + gifData.data[i].images.original.url + "></img>");
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
