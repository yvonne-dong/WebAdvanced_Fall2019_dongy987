/*
function start(){
    for (let i = 0; i < 5; i ++){ // let: declared inside a block, so only accessible to the block
        console.log(i);
    }

    console.log(i);
}

start();
*/

/*
let age = 18;
if (age == 18){
    console.log("i'm sorry but no");
} if (age > 21){
    console.log("welcome");
} else {
    console.log("whatt");
}
*/
/*
let number = Math.floor(Math.random()*10);
switch (number){
    case 4:
        console.log("rolled a four!");
        break;
    case 5:
        console.log("rolled a five!");
        break;
    case 6:
        console.log("rolled a five!");
        break;
    default:
        console.log("another number");
        break;
}
console.log(number); 
*/

//----------------------------------
/*
 * Original Code by Lucien Huang! 
 */

// This is the array of the images

let images = [
    "newschoolbuilding.jpg",
    "050615_Festival_052_750x563.jpg",
    "745127-original.jpg",
    "1496605813404.jpeg",
    "bigimg_parsons.png",
    "D10_01.jpg",
    "DnKbS0IX4AEBA5-.jpg",
    "exterior-PortalImages.jpg",
    "newschoolbuilding.jpg",
    "Parsons_about_5607thave.jpg",
    "Parsons-about.jpg",
    "SP16_SummerIntensive_Nector_Parsons.jpg",
    "The-New-School-Student-Life-3.jpg",
    "The-New-School’s-Parsons-School-of-Design-3.jpg",
    "tish.jpg"];

let imgSwitch = 0;

document.addEventListener("DOMContentLoaded", function(){
    console.log("test linked or not");
    loadImages();
});

function loadImages(){
    let imageNumber = 0;
    let columns = document.getElementsByClassName("column");
    for (let i = 0; i < images.length; i++){
        let newImg = document.createElement("img");
        newImg.className = "images";
        newImg.id = i; // image number = id
        newImg.src = "./assets/images/"+images[i];
        // console.log(i/columns.length);
        if (imageNumber > columns.length-1){
            imageNumber = 0;
        }
        columns[imageNumber].appendChild(newImg);
        imageNumber ++;

        newImg.addEventListener("click", function(tempVal){
            popup(tempVal.target.id);
            // imgSwitch = tempVal.target.id;
        });
    }
}

function popup(imageCount){
    // imgSwitch = imageCount;
    var popup = document.getElementById("popup");
    var img = document.getElementById("pic");


    popup.style.zIndex = "1";
    popup.style.display = "block";
    img.src = "./assets/images/"+images[imageCount];
    img.addEventListener("click", function(){
        close();
    });
}

function close(){
    popup.style.zIndex = "1";
    popup.style.display = "flex";
}









