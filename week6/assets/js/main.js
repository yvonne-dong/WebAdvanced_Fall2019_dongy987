
window.addEventListener('DOMContentLoaded', function () {
    loadData();



    $("#about").click(function(){
        $("#about-sec").addClass("open-about");
        $("#about-sec").html("<h1 style='width: 40vw; margin: 0 auto; margin-top: 25vh;'>ABOUT</h1> <p style='width: 40vw; margin: 0 auto;'>This is an online repository showcasing digital art pieces that focus on the theme of digital space vs. real-world space <br><br>(click anywhere to go back)</p>");
        $("#about-sec").click(function(){
            $("#about-sec").empty();
            $("#about-sec").removeClass("open-about");
        });
    });
});

function loadData() {
    $.getJSON("data.json", function (data) {
        generateWebsites(data);
    });
}

function generateWebsites(data) {
    let source = $("#hbar-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    // the parent to append to
    let list = $(".artworks-list");

    list.append(result);
}

function buttonClick(){
    console.log("clicked");
}

function buttonMouseOver() {
    // var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // document.getElementById("buttons").style['background-color'] = color;
}

function menuFunctions(){

    // $(".menu").mouseover(function(){
    //     let menuId = "#"+this.id;
    //     $(menuId).html("HOME");
    // });
}
