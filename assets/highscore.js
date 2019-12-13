window.onload = function () {

    var initialsInput = document.querySelector("#initials");
    var initialsForm = document.querySelector("#initials-form");
    var initialsList = document.querySelector("#initials-list");
    var clearEl = document.querySelector("#clear");

    var highscores = [];

    init();

    function renderInitials() {
        initialsList.innerHTML = "";

        for (var i = 0; i < highscores.length; i++) {
            var highscores = highscores[i];

            var li = document.createElement("li");
            li.textContent = highscore;
            li.setAttribute("data-index", i);
            //still need to make sure the score appends as well
            li.appendChild(button);
            todoList.appendChild(li);
        }
    }

    function init() {
        var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

        if (storedHighscores !== null) {
            highscores = storedHighscores;
        }

        renderInitials();
    }

    function storeInitials() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    initialsForm.addEventListener("submit", function (event) {
        event.preventDefault();

        var initialsText = initialsInput.value.trim();

        if (initialsText === "") {
            return;
        }

        highscores.push(initialsText);
        initialsInput.value = "";

        storeInitials();
        renderInitials();
    });

    clearEl.addEventListener("click", function () {
        initialsList.clear();
        localStorage.clear();
    });

}