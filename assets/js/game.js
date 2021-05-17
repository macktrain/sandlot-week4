var startBtn = document.getElementById("startBtn");
var answerA = document.getElementById("answerA");
var answerB = document.getElementById("answerB");
var answerC = document.getElementById("answerC");
var answerD = document.getElementById("answerD");
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
var questionsTotalArrOriginal = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];
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

function newQuestion()
{   
    var randomQuestion = Math.floor(Math.random() * questionsTotalArr.length);
    
    //Leave these commented alerts for future test verification
    /*alert("random #: " + randomQuestion + " length of array: "+ questionsTotalArr.length);
    alert(questionsTotalArr.join('\n'));*/
    questionsTotalArr.splice(randomQuestion,1);
    /*alert("random #: " + randomQuestion + " length of array: "+ questionsTotalArr.length);
    alert(questionsTotalArr.join('\n'));*/

    //Build out the question in the html
    buildHTML(randomQuestion)
}

function wrongAnswer()
{
    timerCount = timerCount-10;
}

/************************************/
/*          EVENT LISTENERS         */
/************************************/
/*  Start button event listener     */
startBtn.addEventListener("click", function()
{
    startBtn.style.display = "none";
    timerVar = setInterval(countDown, 1000);
});

/************************************/
/* Answer "A" button event listener */
answerA.addEventListener("click", function()
{
    //Check answerA
    alert ("A selected");
});

/************************************/
/* Answer "B" button event listener */
answerB.addEventListener("click", function()
{
    //Check answerB
    alert ("B selected");
});

/************************************/
/* Answer "C" button event listener */
answerC.addEventListener("click", function()
{
    //Check answerC
    alert ("C selected");
});

/************************************/
/* Answer "D" button event listener */
answerD.addEventListener("click", function()
{
    //Check answerD
    alert ("D selected");
});