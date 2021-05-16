var startBtn = document.getElementById("startBtn");
var timeLeftEl = document.getElementById("timeLeft");
var questionBlockEl = document.getElementById("questionBlock");
//needed these to be global
var timerCount = 60;
var timerVar;
//This counter is a counter outside of the broader timerCount
var questionCtDown = 0;
var questionNumber = 0;
//QuestionsTotal must match #questions in gameQuestions.json
//!!!!IMPORTANT!!!! SEE comments in lines 1-4 of gameXML.js before 
//changing this array. These are the questions available:
var questionsTotalArrOriginal = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Keep copy of original so we can reset if necessary. This array will be 
//manipulated to keep track of previously asked questions.
var questionsTotalArr = questionsTotalArrOriginal;

function countDown() 
{   
    if (timerCount === 0)
    {
        clearInterval(timerVar);
        //What takes place at end goes here.
    }
    if (timerCount%10 == 0)
    {
        questionNumber++;
        //New Question Presented
        newQuestion();
    }
    timeLeftEl.innerHTML = timerCount--;
}


startBtn.addEventListener("click", function()
{
    startBtn.style.display = "none";
    timerVar = setInterval(countDown, 1000);
});

function newQuestion()
{
    var randomQuestion = Math.floor(Math.random() * questionsTotalArr.length);
    //tracks which questions were already selected
    questionsTotalArr.splice(randomQuestion);

    buildHTML(randomQuestion)
}

function wrongAnswer()
{
    timerCount = timerCount-10;
}