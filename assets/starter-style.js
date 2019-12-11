var start = document.querySelector("#startButt");
var timerEl = document.querySelector("#timeLeft");

    var timeLeft = 75;
    var totalSeconds = 0;
    var secondsElapsed = 0;
    var status = "Working";
    var interval;

function startTimer(){
    for (var i = timeLeft; i < 1; i--) { 
        task(i); 
    } 
}
   
 function task(i) { 
   setTimeout(function() { 
        document.timerEl.textContent = timeLeft;
        timerEl.append("#timer");
   }, 1000); 
 } 

start.addEventListener("click", startTimer); 