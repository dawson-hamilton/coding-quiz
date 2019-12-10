var questions = [
    {
        title: "What coding language creates the basic info and layout for the webpage?",
        choices: ["javascript", "html", "css", "whats a coding language?"],
        answer: choices[2]
    },
    {
        title: "What coding language can style the page how you want it?",
        choices: ["javascript", "html", "css", "my page doesnt need style..."],
        answer: choices[3]
    },
    {
        title: "What coding language can help your page be dynamic?",
        choices: ["javascript", "html", "css", "isnt that what css is for?"],
        answer: choices[1]
    },
    {
        title: "If you had a group of text boxes that you wanted to store the values of what tag would you use?",
        choices: ["<ul>", "<li>", "<form>", "whats a tag?"],
        answer: choices[3]
    },
    {
        title: "If you hadd code that needed html, css, and js, how would you make all those work on one webpage?",
        choices: ["hard code everything into the html page with correct tags", "create seperate pages and link them in the html page",
            "just put all the the code in the html and hope it works", "why would I do that when I could just use js for everything?"],
        answer: choices[2]
    },
];

var h1Tag = document.querySelector("#question");
var result = document.querySelector("#correct-or-incorrect");
var butt1El = document.querySelector("#butt1");
var butt2El = document.querySelector("#butt2");
var butt3El = document.querySelector("#butt3");
var butt4El = document.querySelector("#butt4");
var startButtEl = document.querySelector("#startButt");
var timeLeft = 75;

// function startTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timer.textContent = "Timer " + timeLeft;

//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             alert("Out of Time");
//             questionEnder();
//         }

//         else if (i === questions.length) {
//             clearInterval(timerInterval);
//         }
//     }, 1000)
//     return (score)
// }

function startQuiz() {
    startTimer();
}

function answers(){
    butt1El.textContent = choices[0];
    butt1El.appendChild("#butt1");
    butt2El.textContent = choices[1];
    butt2El.appendChild("#butt2");
    butt3El.textContent = choices[2];
    butt3El.appendChild("#butt3");
    butt4El.textContent = choices[3];
    butt4El.appendChild("#butt4");
}

function questionsAnswers() {
    for (var i = 0; i < questions.length; i++) {
        var questionTitle = questions[i];
        //replace h1 #question wiht the desired question
        h1Tag.textContent = questionTitle.title;
        h1Tag.appendChild("#question");
        //replace all buttons with possible answers
        answers();
        //call function that will check if answer is right
        checkAnswer();
    }
}

function checkAnswer() {
    if(choices[i] === answer){
        document.getElementById("#body").style.backgroundColor = "#3cb371";
    } else{
        document.getElementById("#body").style.backgroundColor = "#ff0000";
        timeLeft - 15;
    }
}

startButtEl.addEventListener("click", startQuiz);
butt1El.addEventListener("click", checkAnswer);
butt2El.addEventListener("click", checkAnswer);
butt3El.addEventListener("click", checkAnswer);
butt4El.addEventListener("click", checkAnswer);