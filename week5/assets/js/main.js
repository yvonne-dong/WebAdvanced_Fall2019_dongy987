//*** turn into JSON later
const questions = ["WHERE WOULD YOU SEE ART?", "IS THIS ART?", "EMOJI HERE", "ARE YOU AN ARTIST?", "WHAT KIND OF ART ARE YOU INTERESTED IN?", "DO YOU THINK THIS WEBSITE IS ART?"];
//*** also: store user replies into JSON
let userAnswer = [];
window.addEventListener('DOMContentLoaded', function () {
    let mobileMenu = $("#mNav");
    mobileLinks(mobileMenu);
    showSection();

    let offsetPos = $("#dNav").offset().top;
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop();
        let menuLinks = $("nav");
        fixedMenu(menuLinks);
        let menuBar = $(".desktopMenu");
        fixedMenu(menuBar);

        function fixedMenu(links) {
            if (scrollPos >= offsetPos) {
                links.addClass("fixed");
            } else {
                links.removeClass("fixed");
            }
        }
    });

    submitText();
});

/*
case0: What do you see as art? [text entry bar with text amount limitation]
case1: Where would you see art? [multi selector]
case2: Is this art? (pull random image from API) [y & n button]
case3: [Invite user to do sth here] [canvas maybe]
case4: Are you an artist? [slider bar]
case5: What kind of art are you interested in? [add tags here]
case6: Do you think this website is art? [slider bar]
*/

function submitText() {
    $("#submit").click(function () {
        let response = $('#message').val();
        if (response.length > 0) {
            userAnswer.push(response);
            let col = document.getElementById("collection");
            col.innerHTML += "<div><p id='response' class='text'>" + response + "</p></div>";
            $('#message').val('');
            let home = document.getElementById("home");
            home.innerHTML += "<div><p id='finish' class='text'>Thank you, please click next to proceed.</p></div>";
            $("#buttons").remove();
            $('#message').remove();
            $('#home').append("<div id='buttons'><button id='next' class='text'>NEXT</button></div>");
            $('#next').on('click', nextIsClicked());
        } else {
            alert("Please write something at least : D");
        }
    });
}

function nextIsClicked() {
    // $("#next").click(function () {
    //     console.log('clickeeeed');
    // });

    // to next case
    $("#next").click(function () {
        console.log("haiii");
        $('#next').fadeOut(300,function(){$(this).remove();});
    });
}

// for mobile
// add links
function mobileLinks(container) {
    container.innerHTML += "<a href='#home'>HOME</a>";
    container.innerHTML += "<a href='#collection'>COLLECTION</a>";
    container.innerHTML += "<a href='#about'>ABOUT</a>";
}

//closing side menu bar 
function naviconClick(x) {
    x.classList.toggle("clicked");
}

function showSection() {
    // scroll to targeted section
    $('a').click(function () {
        // get the id of clicked url
        let toSection = $(this.hash);
        toSection = toSection.length && toSection;
        let toOffset = toSection.offset().top;
        $('html, body').animate({ scrollTop: toOffset }, 500);
    });
}

