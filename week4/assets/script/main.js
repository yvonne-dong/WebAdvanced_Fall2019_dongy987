let myDevice = window.navigator.userAgent;
// document.getElementById("device").innerHTML = myDevice;
let instruction = '';
if (myDevice.indexOf("Mobile")>-1){
    instruction = 'CLICK TO CHANGE BUTTON COLOR';
} 
if (myDevice.indexOf("Macintosh")>-1){
    instruction = 'HOVER TO CHANGE BUTTON COLOR';
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("test linked or not");
    document.getElementById("title").innerHTML = instruction;
    addButtons();
});

function addButtons() {
    let element = document.getElementById("buttons");
    let title = document.getElementById("title");
    let header = document.getElementById("desktop");

    for (let i = 0; i < 16; i++) {
        let newButton = document.createElement("div");
        newButton.className = "button";
        newButton.id = i + 1;
        newButton.innerHTML = " ";
        element.appendChild(newButton);
        
        let oldBG = newButton.style['background-color'];
        // change bg color for button
        // reference: https://jsfiddle.net/6n0tk3a3/2/
        newButton.onmouseclick = function (e) {
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            title.style['color'] = color;
            header.style['background-color'] = color;
            header.style['transition-duration'] = '0.3s';
            newButton.style['background-color'] = color;
            newButton.style['border'] = '4px solid' + color;
        }
        newButton.onmouseover = function (e) {
            var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
            title.style['color'] = color;
            header.style['background-color'] = color;
            header.style['transition-duration'] = '0.3s';
            newButton.style['background-color'] = color;
            newButton.style['border'] = '4px solid' + color;
        }
        newButton.onmouseout = function (e) {
            title.style['color'] = '#0000ff';
            header.style['background-color'] = '#0000ff';
            header.style['transition-duration'] = '0.3s';
            newButton.style['background-color'] = oldBG;
            newButton.style['border'] = '4px solid #0000ff';
        }
    }
}
