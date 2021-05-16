/*  !!!!IMPORTANT!!!! 
    When using gameQuestions.json note newQuestion() variable questionsTotal MUST 
    be equal to the number of question in gameQuestions.json.  
    CURRENTLY there are 15 questions (1, not 0, referenced) in the json */
var url = "https://macktrain.github.io/sandlot-week2/assets/json/gameQuestions.json";
var xhro = new XMLHttpRequest();
var json = "";

xhro.onreadystatechange = function() 
{
    if (this.readyState == 4 && this.status == 200) 
    {
        //alert(this.responseText);
        json = JSON.parse(this.responseText);
    }
};
xhro.open("GET", url, true);
xhro.send();

function buildHTML(x) 
{
    var html = "";
    
/* This allows the coming soon image to be displayed via css comingSoon class */
    html += "       <div id='questionNum'>";
    html += "           " +   json.questions[x].qNum;
    html += "       </div>";
    for (var i=0; i< json.questions[x].possibleAnswers.length; i++)
    {
        html += "       <div class='possibleAnswer'>";
        html += "           " +   json.questions[x].possibleAnswers[i].letter + ".  " + json.questions[x].possibleAnswers[i].answer; 
        html += "       </div>";
    }

    document.getElementById("questionBlock").innerHTML = html;
}
