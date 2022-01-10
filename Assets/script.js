var timeEl = document.querySelector("#CountDownTimer");
var secondsLeft = " ";
var selectedButton = " ";
var countdown = document.querySelector("#CountDownTimer");    
var startBtn = document.querySelector("#start");
var backBtn = document.querySelector("#back");
var resetBtn = document.querySelector("#clear");
var selectedButtonA = document.querySelector("#a");
var selectedButtonB = document.querySelector("#b");
var selectedButtonC = document.querySelector("#c");
var selectedButtonD = document.querySelector("#d");
var question = document.querySelector("#Question");
var score = document.querySelector("#ResultScore");
var gameMsg = document.querySelector("#result");
var mainReturn = document.querySelector("#SectionOneLink"); 
var goScores = document.querySelector("#SectionThreeLink"); 
var SHDinitials = document.querySelector("#ResultIntitials");
var SHDscore = document.querySelector("#ResultScore");
var l0 = document.querySelector("ResultInitials-0");
var l1 = document.querySelector("ResultInitials-1");
var l2 = document.querySelector("ResultInitials-2");
var l3 = document.querySelector("ResultInitials-3");
var l4 = document.querySelector("ResultInitials-4");
var l5 = document.querySelector("ResultInitials-5");
var l6 = document.querySelector("ResultInitials-6");
var l7 = document.querySelector("ResultInitials-7");
var l8 = document.querySelector("ResultInitials-8");
var l9 = document.querySelector("ResultInitials-9");
var s0 = document.querySelector("ResultScore-0");
var s1 = document.querySelector("ResultScore-1");
var s2 = document.querySelector("ResultScore-2");
var s3 = document.querySelector("ResultScore-3");
var s4 = document.querySelector("ResultScore-4");
var s5 = document.querySelector("ResultScore-5");
var s6 = document.querySelector("ResultScore-6");
var s7 = document.querySelector("ResultScore-7");
var s8 = document.querySelector("ResultScore-8");
var s9 = document.querySelector("ResultScore-9");
var gameScore = 0;
var addLength = 1;
var GetInitials;
var GetScore;

var scoreHistory = {
    initials: [],
    score: [] 
}


// if you want to add a question, increment the number by 1 and add the details at the end of each data item.  
var question = {
        number: ["0","1","2","3","4","5","6","7","8","9","10","11","12"],
        ask: ["Which is not a JavaScript Data type?",
            " 'This' refers to the ________ from where it is called?", 
            "Which is not a looping structure in JavaScript?",
            "Which item is not a type of pop up box in Java Script?",
            "Which of these are not a valid Boolean Operator in JavaScript?",
            "Which is not a HTML Semantic Element?",
            "Which one is not a Flexbox property?",
            "Which HTML element is a container for data about data?",
            "JSON arrays are written inside ______ brackets?",
            "JSON objects are written inside _______ brackets?",
            "Which is not a valid Javascript Number Method?",
            "What symbol indicates code from the Javascript library - Jquery?",
            "What 'symbol' or characters indicates a reference to the 'UTF-8' character set?"],
        optionA: ["Boolean","Class","For","Alert","'&!'","form","Display","head","'{}'","'<>'","toString()","'@'","'#&'"],
        optionB: ["Object","Object","Do-while","Confirm","'||'","div","justify-content","class","'[]'","'[]'","toFixed","'/*'","'*&'"],
        optionC: ["Class","Element","When","Prompt","'&&'","section","align-content","script","'()'","'{}'","toPrecision","'--'","'&#'"],
        optionD: ["Number","Document","While","Display","'!&'","article","order","Inline","'<>'","'()'","toRandom","'$'","'#@'"],
        correct: ["Class","Object","When","Display","'&!'","div","order","head","'[]'","'{}'","toRandom","'$'","'&#'"],
    }

function startGame(){

    startGame.preventDefault;
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    initials = prompt("Please enter your initials");
    if (initials == "" || initials == null){
        stopQuiz;
    } else{
        document.getElementById("CountDownTimer").innerHTML = "Start";
        gameScore = 0;
        gameMsg = " ";
        console.log(localStorage.getItem("scoreHistory.initials"));
        if (localStorage.getItem("scoreHistory.initials") != null){
            scoreHistory.initials = JSON.parse(localStorage.getItem("scoreHistory.initials"));
            scoreHistory.score = JSON.parse(localStorage.getItem("scoreHistory.score"));
        }
        console.log("StartGame", scoreHistory);
        document.getElementById("result").innerHTML = gameMsg;
        secondsLeft = 60;
        startTimer();
        startQuiz();
    }
}

function startTimer() {

        // Sets interval in variable
        var timerInterval = setInterval(function() {
          secondsLeft--;
          
          countdown.textContent = secondsLeft;
      
          if(secondsLeft <= 0) {
            stopQuiz();
            clearInterval(timerInterval);
            document.getElementById("CountDownTimer").innerHTML = "Times Up!";
            
          }
        }, 1000);
}

function startQuiz(){
    
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;

    loadQuestion(); 
}

function loadQuestion(){

    var NumQuestion = (question.number.length);
    setQuestion = question.number[Math.floor(Math.random() * NumQuestion)];
    console.log(setQuestion);
    document.getElementById("ask").innerHTML = question.ask[setQuestion];
    console.log(question.ask[setQuestion]);
    console.log(question.optionA[setQuestion]);
    document.getElementById("a").innerHTML = question.optionA[setQuestion];
    console.log(question.optionB[setQuestion]);
    document.getElementById("b").innerHTML = question.optionB[setQuestion];
    console.log(question.optionC[setQuestion]);
    document.getElementById("c").innerHTML = question.optionC[setQuestion];
    console.log(question.optionD[setQuestion]);
    document.getElementById("d").innerHTML = question.optionD[setQuestion];
    console.log(question.correct[setQuestion]);
    
}
function checkResultA(selectedButtonA) {
    
    console.log("Selected Button",selectedButtonA);  
    console.log("Selected Button",selectedButtonB);  
    console.log("Selected Button",selectedButtonC);  
    console.log("Selected Button",selectedButtonD);  
    console.log("correct option",question.correct[setQuestion]);  //
    selectedButton = question.optionA[setQuestion];
    adjustTimeScore();
  
    startQuiz();
}
function checkResultB(selectedButtonB) {
    
    console.log("Selected Button",selectedButtonA);  
    console.log("Selected Button",selectedButtonB);  
    console.log("Selected Button",selectedButtonC);  
    console.log("Selected Button",selectedButtonD);  
    console.log("correct option",question.correct[setQuestion]);  //
    selectedButton = question.optionB[setQuestion];
    console.log(selectedButton);
    adjustTimeScore();
    
    startQuiz();
}

function checkResultC(selectedButtonC) {
    
    console.log("Selected Button",selectedButtonA);  
    console.log("Selected Button",selectedButtonB);  
    console.log("Selected Button",selectedButtonC);  
    console.log("Selected Button",selectedButtonD);  
    console.log("correct option",question.correct[setQuestion]);  //
    selectedButton = question.optionC[setQuestion];
    console.log(selectedButton);
    adjustTimeScore();
   
    startQuiz();
}

function checkResultD(selectedButtonD) {
    
    console.log("Selected Button",selectedButtonA);  
    console.log("Selected Button",selectedButtonB);  
    console.log("Selected Button",selectedButtonC);  
    console.log("Selected Button",selectedButtonD);  
    console.log("correct option",question.correct[setQuestion]);  //
    selectedButton = question.optionD[setQuestion];
    console.log(selectedButton);
    adjustTimeScore();
   
    startQuiz();
}

function adjustTimeScore(){
    console.log(selectedButton);
    console.log(question.correct[setQuestion]);
   
        if (selectedButton === question.correct[setQuestion]){
            gameScore = gameScore + 10;
            gameMsg = "Well Done! That is the correct answer your score has increased by 10 points. Your total score = " + gameScore + " points";
        }
        else {
            secondsLeft = secondsLeft - 10;
            gameMsg = "Oops that is incorrect, the timer has been reduced by 10 seconds";
        }
        document.getElementById("result").innerHTML = gameMsg;
        console.log(gameMsg);
}

function stopQuiz(){
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    
    addScore();

    window.localStorage.setItem("scoreHistory.initials",JSON.stringify(scoreHistory.initials));    
    window.localStorage.setItem("scoreHistory.score",JSON.stringify(scoreHistory.score));
    gameMsg = "Game Over - Your final score is " + gameScore;
    console.log(gameMsg);
    document.getElementById("result").innerHTML = gameMsg;
}

function addScore() {
    
    if (localStorage.getItem("scoreHistory.initials") != null){
        addLength = scoreHistory.score.length;
    }
    else{
        addLength=0;
    }
            
    console.log("Addscore",addLength);
    var savedScore = "n";

        for (var i = 0; i < addLength; i++)
        {      
        console.log("Adding next score");  

            if (savedScore == "n")
            {
                if(gameScore == scoreHistory.score[i] || gameScore > scoreHistory.score[i] )
                {
                    scoreHistory.initials.splice(i,0,initials);
                    scoreHistory.score.splice(i,0,gameScore);
                    savedScore = "y";
                }
            }
        }
    if (savedScore == "n"){

        scoreHistory.initials.push(initials);
        scoreHistory.score.push(gameScore);     
    }
    console.log(scoreHistory,); 
}

function getScore(){

    console.log("getScore");
  
    arrLength = 0;
 
    console.log(arrLength);

    scoreHistory.initials = JSON.parse(localStorage.getItem("scoreHistory.initials"));
    scoreHistory.score = JSON.parse(localStorage.getItem("scoreHistory.score"));
    console.log("scoreHistory2", scoreHistory.initials, scoreHistory.score);
    
    if (scoreHistory.score == null)
    {
        document.getElementById("ResultInitials-0").innerHTML = "No";
        document.getElementById("ResultScore-0").innerHTML =  "Scores";
    } 
    else
    {
       
        arrLength = scoreHistory.score.length;
        
    
        console.log(arrLength);

        for (var idx = 0; idx < arrLength; idx++) 
        {

            SHDinitials = scoreHistory.initials[idx];
            SHDscore = scoreHistory.score[idx];
            console.log(SHDinitials);
            console.log(SHDscore);

            if (idx == 0)
            {
                document.getElementById("ResultInitials-0").innerHTML = SHDinitials;
                document.getElementById("ResultScore-0").innerHTML =  SHDscore;
            }
            if (idx == 1)
            {
                document.getElementById("ResultInitials-1").innerHTML = SHDinitials;
                document.getElementById("ResultScore-1").innerHTML =  SHDscore;  
            }
            if (idx == 2)
            { 
                document.getElementById("ResultInitials-2").innerHTML = SHDinitials;
                document.getElementById("ResultScore-2").innerHTML =  SHDscore; 
            }
            if (idx == 4)
            {
                document.getElementById("ResultInitials-3").innerHTML = SHDinitials;
                document.getElementById("ResultScore-3").innerHTML =  SHDscore; 
            }
            if (idx == 4)
            {
                document.getElementById("ResultInitials-4").innerHTML = SHDinitials;
                document.getElementById("ResultScore-4").innerHTML =  SHDscore; 
            }
            if (idx == 5)
            {
                document.getElementById("ResultInitials-5").innerHTML = SHDinitials;
                document.getElementById("ResultScore-5").innerHTML =  SHDscore;
            } 
            if (idx == 6)
            {
                document.getElementById("ResultInitials-6").innerHTML = SHDinitials;
                document.getElementById("ResultScore-6").innerHTML =  SHDscore; 
            }
            if (idx == 7)
            {
                document.getElementById("ResultInitials-7").innerHTML = SHDinitials;
                document.getElementById("ResultScore-7").innerHTML =  SHDscore;
            } 
            if (idx == 8)
            {
                document.getElementById("ResultInitials-8").innerHTML = SHDinitials;
                document.getElementById("ResultScore-8").innerHTML =  SHDscore; 
            }
            if (idx == 9)
            {
                document.getElementById("ResultInitials-9").innerHTML = SHDinitials;
                document.getElementById("ResultScore-9").innerHTML =  SHDscore;
            }
        }
    }
}

function resetScore() {
    
    var check = confirm("Are you sure, this will clear the game and scoreboard of ALL scores?");
    if (check != null){
        localStorage.clear(scoreHistory.initials);
        localStorage.clear(scoreHistory.score);
    }
    scoreHistory.initials = "";
    scoreHistory.score = "";   
    document.getElementById("ResultInitials-0").innerHTML = "No";
    document.getElementById("ResultScore-0").innerHTML =  "Scores";
     
    }


function getResult(){

    getScore();
    console.log("get Result",scoreHistory);
 
    document.querySelector(".SectionThree").scrollIntoView({ 
        behavior: 'smooth' 
      });
}


function gameReturn(){
        
    document.querySelector(".SectionOne").scrollIntoView({ 
        behavior: 'smooth' 
      });
}


document.getElementById("start").addEventListener("click",function(){startGame()});
document.getElementById("clear").addEventListener("click",function(){resetScore()});
document.getElementById("back").addEventListener("click",function(){gameReturn()});
document.getElementById("trophy").addEventListener("click",function(){getResult()});
document.getElementById("a").addEventListener("click",function(){checkResultA(selectedButtonA)}); 
document.getElementById("b").addEventListener("click",function(){checkResultB(selectedButtonB)});
document.getElementById("c").addEventListener("click",function(){checkResultC(selectedButtonC)});
document.getElementById("d").addEventListener("click",function(){checkResultD(selectedButtonD)});
