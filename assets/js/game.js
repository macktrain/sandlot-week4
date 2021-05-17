var startBtn = document.getElementById("startBtn");
var timeLeftEl = document.getElementById("timeLeft");
var questionBlockEl = document.getElementById("questionBlock");
//needed these to be global
var timerCount = 60;
var answerTimer = 10;
//setInterval for 60 sec gatclock
var gameTimer = "";
//setInterval for 10 sec question clock
var questionTimer = "";
var first = true;
//Right/wrong answer counters
var rightAnswers = 0;
var wrongAnswers = 0;
var totalQuestions = 0;
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
    if (timerCount <= 0)
    {
        clearInterval(gameTimer);
        clearInterval(questionTimer);
        timeLeftEl.innerHTML = 0;
        document.getElementById("gameTimeComments").innerHTML = "<p>GAME OVER!!</p>";
        
        var html = "";
        html += "<div id='results'>";
        html += "<div><p>Out of "+ totalQuestions +", your results were:</p></div>";
        html += "<div><p>You answered "+ rightAnswers +" correctly!</p></div>";
        html += "<div><p>You answered "+ wrongAnswers +" incorrectly!</p></div>";
        document.getElementById("questionBlock").innerHTML = html;
    }
    else
    {
        timerCount--;
        timeLeftEl.innerHTML = timerCount;
    }
}

function questionCountDown ()
{
    newQuestion();
    questionTimer = setInterval(newQuestion,10000);
}

function newQuestion()
{   
    totalQuestions++;
    var randomQuestion = Math.floor(Math.random() * questionsTotalArr.length);
    
    //Build out the question in the html.  We want the value from the array so we
    //avoid repeating questions.
    buildHTML(questionsTotalArr[randomQuestion]);
    //Leave these commented alerts for future test verification
    /*alert("random #: " + randomQuestion + " length of array: "+ questionsTotalArr.length);
    alert(questionsTotalArr.join('\n'));*/
    questionsTotalArr.splice(randomQuestion,1);
    /*alert("random #: " + randomQuestion + " length of array: "+ questionsTotalArr.length);
    alert(questionsTotalArr.join('\n'));*/
}

function wrongAnswer()
{
    timerCount = timerCount-10;
    wrongAnswers++;
}

/************************************/
/*          EVENT LISTENERS         */
/************************************/
/*  Start button event listener     */
startBtn.addEventListener("click", function()
{
    startBtn.style.display = "none";
    questionCountDown();
    gameTimer = setInterval(countDown, 1000);
});

/************************************/
/*   Dynamic button event listener  */
function checkAnswer(answerGiven, correct, verbose)
{  
    document.getElementById("gameTimeComments").innerHTML = "";
    if (answerGiven.trim() != correct.trim())
    {
        document.getElementById("gameTimeComments").innerHTML = "<p>" + answerGiven +" is incorrect. BYE BYE 10 seconds!!</p>";
        wrongAnswer();
        clearInterval(questionTimer);
        setTimeout(questionCountDown, 500);
    }
    else
    {
        document.getElementById("gameTimeComments").innerHTML = "<p>GREAT JOB!  " + correct +" is correct!</p>";
        //slight delay to allow the last message to show
        clearInterval(questionTimer);
        rightAnswers++;
        setTimeout(questionCountDown, 500);
    }
}