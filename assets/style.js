document.addEventListener("DOMContentLoaded", function () {

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
            title: "If you had a group of text boxes that you wanted to store the values of, what tag would you use?",
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
    var a = document.getElementById("#butt1");
    var b = document.querySelector("#butt2");
    var c = document.querySelector("#butt3");
    var d = document.querySelector("#butt4");
    var start = document.querySelector("#startButt");
    var timerEl = document.querySelector("#timeLeft");

    var timeLeft = 75;
    var totalSeconds = 0;
    var secondsElapsed = 0;
    var status = "Working";
    var interval;

    // timerEl.textContent = timeLeft;
    // timerEl.appendChild(timerEl);

    function setTime() {
        var minutes;

        if (status === "Working") {
            minutes = timeLeft.value.trim();
        } else {
            minutes = timeLeft.value.trim();
        }

        clearInterval(interval);
        totalSeconds = minutes * 60;
    }

    function startTimer() {
        setTime();

        interval = setInterval(function () {
            secondsElapsed++;
            renderTime();
        }, 1000);
    }

    function startQuiz() {
        startTimer();
    }

    function answers() {
        a.textContent = questions[0].choices[0];
        a.appendChild("#butt1");
        b.textContent = questions[1].choices[1];
        b.appendChild("#butt2");
        c.textContent = questions[2].choices[2];
        c.appendChild("#butt3");
        d.textContent = questions[3].choices[3];
        d.appendChild("#butt4");
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
        console.log("Clicked Bro");

        if (questions.choices === questions.answer) {
            document.getElementById("#body").style.backgroundColor = "#3cb371";
        } else {
            document.getElementById("#body").style.backgroundColor = "#ff0000";
            timeLeft - 15;
        }
    }

    console.log(a);

    start.addEventListener("click", function (event) {
        console.log("Start");
    });
    a.addEventListener("click", function (event) {
        console.log("What");
    });
    b.addEventListener("click", checkAnswer);
    c.addEventListener("click", checkAnswer);
    d.addEventListener("click", checkAnswer);

});