
window.addEventListener('DOMContentLoaded', function () {
    loadData();
});

function loadData(){
    $.getJSON("data.json", function(data){
        console.log(data);
        generateWebsites(data);
    });
}

function generateWebsites(data){
    let source = $("#hbar-template").html();
    let template = Handlebars.compile(source);
    let result = template(data);
    // the parent to append to
    let list = $(".artworks-list");

    list.append(result);
}