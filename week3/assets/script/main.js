
const questions=[{question: "How often do you look up info on museum websites?",choices: ["Frequently.", "Sometimes.", "Barely.", "Never."]}, 
  {question: "What's your opinion about phone usage in museums?",choices: ["I use and support phone usage in museums.", "I don't support phone usage in museums.", "No particular preference.", "Others."]},
  {question: "What's your opinion about museum technology devices?",choices: ["I use and support museum tech.", "I don't use but support museum tech.", "I don't support museum tech.", "No particular preference."]},
  {question: "How familar are you with the term 'digital art'?",choices: ["I know what the term means.", "I know the term but not very familar.", "I've only heard about the term.", "I've never heard about the term."]}];

let userAns = [];

let counter = 0;

let answer = document.getElementById("answers");
let buttons = document.getElementsByClassName("button");

let title = document.getElementById("title");
title.addEventListener("click", function(){
    window.location.reload();
});

function nextQuestion(idx){
    document.getElementById("question").innerHTML = questions[idx].question;
    for (let i = 0; i < buttons.length; i++){
        let nextChoice = questions[idx].choices[i];
        buttons[i].innerHTML = nextChoice;
    }    
}

function quizResult(){
    console.log(userAns);
    for (let i = 0; i < buttons.length; i++){
        let element = document.getElementById("answers");
        element.parentNode.removeChild(element);
    } 
    let element = document.getElementById("contain");
    
    document.getElementById("question").innerHTML = "Here are your answers:";
    for (let i = 0; i < userAns.length; i++){
        let result = document.createElement("div");
        result.id = "answers";
        result.innerHTML = userAns[i];
        element.appendChild(result);
    }
    

    let newButton = document.createElement("div");
    newButton.className = "button";
    newButton.id = "back";
    newButton.innerHTML = "back";
    newButton.addEventListener("click", function(){
        window.location.reload();
    });
    element.appendChild(newButton);
}

answer.addEventListener("click", function(ans){
    if (counter < questions.length){
        userAns.push(ans.target.innerHTML);
        nextQuestion(counter);
        // console.log(counter);
        counter ++;
    } else {
        quizResult();
    }    
});

  