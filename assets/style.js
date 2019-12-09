var questions = [
    {
        title: "What coding language creates the basic info and layout for the webpage?",
        choices: ["javascript", "html", "css", "whats a coding language?"],
        answer: "html"
    },
    {
        title: "What coding language can style the page how you want it?",
        choices: ["javascript", "html", "css", "my page doesnt need style..."],
        answer: "css"
    },
    {
        title: "What coding language can help your page be dynamic?",
        choices: ["javascript", "html", "css", "isnt that what css is for?"],
        answer: "javascript"
    },
    {
        title: "If you had a group of text boxes that you wanted to store the values of what tag would you use?",
        choices: ["<ul>", "<li>", "<form>", "whats a tag?"],
        answer: "<form>"
    },
    {
        title: "If you hadd code that needed html, css, and js, how would you make all those work on one webpage?",
        choices: ["hard code everything into the html page with correct tags", "create seperate pages and link them in the html page",
            "just put all the the code in the html and hope it works", "why would I do that when I could just use js for everything?"],
        answer: "create seperate pages and link them in the html page"
    },
];

var h1Tag = document.querySelector("#question");
var result = document.querySelector("#correct-or-incorrect");
var butt1El = document.querySelector("#butt1");
var butt2El = document.querySelector("#butt2");
var butt3El = document.querySelector("#butt3");
var butt4El = document.querySelector("#butt4");
var timeLeft = 75;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = "Timer " + timeLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Out of Time");
            questionEnder();
        }

        else if (i === questions.length) {
            clearInterval(timerInterval);
        }
    }, 1000)
    return (score)
}

function answersLoop() {
    for (var i = 0; index < choices.length; index++) {

    }
}

function rightAnswer() {
    answersLoop();
    if (choices[i] === answer) {

    } else {

    }
}

butt1El.addEventListener("click", function () {
    rightAnswer();
});

butt2El.addEventListener("click", function () {
    rightAnswer();
});

butt3El.addEventListener("click", function () {
    rightAnswer();
});

butt4El.addEventListener("click", function () {
    rightAnswer();
});