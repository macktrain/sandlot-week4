var startBtn = document.getElementById("startBtn");
var timeLeftEl = document.getElementById("timeLeft");
var questionBlockEl = document.getElementById("questionBlock");
//needed these to be global
var timerCount = 60;
var timerVar;
//This counter is a counter outside of the broader timerCount
var questionCtDown = 0;
var questionNumber = 0;

function countDown() 
{   
    if (timerCount === 0)
    {
        clearInterval(timerVar);
        //What takes place at end goes here.
    }
    if (timerCount%5 == 0)
    {
        questionNumber++;
        //New Question Presented
        newQuestion();
        questionBlockEl.innerHTML = timerCount + " % 5 = " + (timerCount%5);
    }
    timeLeftEl.innerHTML = timerCount--;
}


startBtn.addEventListener("click", function()
{
    timerVar = setInterval(countDown, 1000);

});

subtractBtn.addEventListener("click", function()
{
    timerCount = timerCount-10;
});