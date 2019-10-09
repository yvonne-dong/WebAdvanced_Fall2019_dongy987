
window.addEventListener('DOMContentLoaded', function () {
    loadData();



    $("#about").click(function(){
        console.log("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,");
    });
});

function loadData() {
    $.getJSON("data.json", function (data) {
        // console.log(data);
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

function buttonMouseOver() {
    // var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // document.getElementById("buttons").style['background-color'] = color;
}

function buttonMouseOut() {

}

function menuFunctions(){

    // $(".menu").mouseover(function(){
    //     let menuId = "#"+this.id;
    //     $(menuId).html("HOME");
    // });
}
