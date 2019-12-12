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
    var startEl = document.querySelector("#startButt")

    var button = false;
    var timeLeft = 75;

    startEl.addEventListener("click", function () {
        console.log("test");
        startTimer();
        question();
        answers();
    });

    aEl.addEventListener("click", function () {
        console.log("test");
        question();
        answers();
    });

    bEl.addEventListener("click", function () {
        console.log("test");
        question();
        answers();
    });

    cEl.addEventListener("click", function () {
        console.log("test");
        question();
        answers();
    });

    dEl.addEventListener("click", function () {
        console.log("test");
        question();
        answers();
    });

    function question() {
        button = true;
        var i = 0;
        while (button = true) {
            h1Tag.textContent = questions[i].title;
            h1Tag.append("#question");
            i++;
            button = false;
        }
    }

    function answers() {
        button = true;
        var f = 0;
        while (button = true) {
            aEl.textContent = questions[f].choices[0];
            aEl.append("#butt1");
            bEl.textContent = questions[f].choices[1];
            bEl.append("#butt2");
            cEl.textContent = questions[f].choices[2];
            cEl.append("#butt3");
            dEl.textContent = questions[f].choices[3];
            dEl.append("#butt4");
            f++;
            button = false;
        }
    }

    function startTimer() {
        var seconds = document.getElementById("countdown").textContent;
        var countdown = setInterval(function () {
            seconds--;
            document.getElementById("countdown").textContent = seconds;
            if (seconds <= 0) clearInterval(countdown);
        }, 1000);
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

}