var info = "hello world";
var attributes = ["Blue", "Green", "Red"];
var myMsgs = document.getElementsByClassName("msg");
// alert("Greetings"+": "+info);
// document.write("<p>"+info+"</p>");

// for (var i = 0; i < attributes.length; i++){
//     console.log(attributes[i]); 
//     console.log(i); 
//     for (var i = 0; i < myMsgs.length; i++){
//         myMsgs[i].innerHTML = attributes[i];
//     }   
// }

for (var j = 0; j < attributes.length; j++){
    // document.write("<p>"+attributes[i]+"</p>");
    console.log(attributes[j]); 
    console.log(j); 
    for (var i = 0; i < myMsgs.length; i++){
        myMsgs[i].innerHTML = attributes[i];
    }   
}

// for (var i = 0; i < myMsgs.length; i++){
//     myMsgs[i].innerHTML = attributes[i];
// }





