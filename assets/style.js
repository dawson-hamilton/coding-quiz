window.onload = function () {

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
    var aEl = document.querySelector("#butt1");
    var bEl = document.querySelector("#butt2");
    var cEl = document.querySelector("#butt3");
    var dEl = document.querySelector("#butt4");
    var buttonEls = document.querySelectorAll("button");

    var startEl = document.querySelector("#startButt")

    var button = false;
    var timeLeft = 75;
    var f = 0;
    var i = 0;

    startTimer();
    question();
    answers();

    buttonEls.forEach(function (element) {
        element.addEventListener("click", function () {
            var butt1 = this.innerText;
            checkAnswer(butt1)
            question();
            answers();
        });

    })

    function checkAnswer() {
        if (butt1 === questions.answer) {
            document.getElementById("#body").style.backgroundColor = "#3cb371";
        } else {
            document.getElementById("#body").style.backgroundColor = "#ff0000";
            timeLeft - 15;
        }
    }

    function question() {
        h1Tag.textContent = questions[i].title;
        i++;
    }

    function answers() {
        aEl.textContent = questions[f].choices[0];
        bEl.textContent = questions[f].choices[1];
        cEl.textContent = questions[f].choices[2];
        dEl.textContent = questions[f].choices[3];
        f++;
    }

    function startTimer() {
        var seconds = document.getElementById("countdown").textContent;
        var countdown = setInterval(function () {
            seconds--;
            document.getElementById("countdown").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);
    }

}