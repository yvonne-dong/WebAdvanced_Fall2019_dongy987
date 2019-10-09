let section = '';
let hashtag = '';
let artworkData = {data:[]};

window.addEventListener('DOMContentLoaded', function () {
    hashtag = $(location).attr('hash');
    loadData(hashtag);
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
