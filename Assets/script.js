var timeEl = document.querySelector("#CountDownTimer");
//var gameOver = "";
var secondsLeft = "";
var selectedButton = "";
var countdown = document.querySelector("#CountDownTimer");    
var mainReturn = document.querySelector("#SectionOne"); 
var goScores = document.querySelector("#SectionThree");                 
var startBtn = document.querySelector("#start");
var backBtn = document.querySelector("#back");
var resetBtn = document.querySelector("#clear")
var selectedButtonA = document.querySelector("#a");
var selectedButtonB = document.querySelector("#b");
var selectedButtonC = document.querySelector("#c");
var selectedButtonD = document.querySelector("#d");
var question = document.querySelector("#Question");
var score = document.querySelector("#ResultScore");
var gameMsg = document.querySelector("#result");
var 

var gameScore = 0;

var scoreHistory = {
    initials: [],
    score:[]}; 
// if you want to add a question, increment the number by 1 and add the details at the end of each data item.  
var question = {
        number: ["0", "1","2","3","4"],
        ask: ["Which is not a JavaScript Data type?",
              " 'This' refers to the ________ from where it is called", 
              "Which is not a looping structure in JavaScript?",
              "Which item is not a type of pop up box in Java Script?",
              "Which of these are not a valid Boolean Operator in JavaScript?"],
        optionA: ["Boolean","Class","For","Alert","&!"],
        optionB: ["Object","Object","Do-while","Confirm","||"],
        optionC: ["Class","Element","When","Prompt","&&"],
        optionD: ["Number","Document","While","Display","!&"],
        correct: ["Class","Object","When","Display","&!"],
    }

function startGame(){
    startGame.preventDefault;
    initials = prompt("Please enter your initials");
    secondsLeft = 60000;
    reduceTime();
    gameScore = 0;
    startQuiz();
}

function reduceTime() {
    console.log("reduce time", secondsLeft);
    setInterval(countDown(secondsLeft),1000);
}

function countDown(secondsLeft){
        
    console.log(secondsLeft)   ; 
    secondsLeft--;
    console.log(secondsLeft)   ; 
    timeEl.textContent = secondsLeft;  
    document.getElementById("CountDownTimer").style.display = "block";
    document.getElementById("CountDownTimer").innerHTML = timeEl.textContent;
    if(secondsLeft < 0001){
        clearInterval;
        stopQuiz();
    }    
}
    

function startQuiz(){
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
    reduceTime()
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
    reduceTime()
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
    reduceTime()
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
    reduceTime()
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
            secondsLeft = secondsLeft - 1000;
            gameMsg = "Oops that is incorrect, the timer has been reduced by 10 seconds";
        }
        document.getElementById("result").innerHTML = gameMsg;
        console.log(gameMsg);
    
       
}

function stopQuiz(){
    addScore();
    gameMsg = "Game Over - Your final socre is " + gameScore;
    console.log(gameMsg);
    
    document.getElementById("result").innerHTML = gameMsg;
   
}

function addScore() {
    scoreHistory.initials=initials;
    scoreHistory.score=gameScore;    
    localStorage.setItem("Score History",scoreHistory);
    console.log(scoreHistory);
}

function getScore(){

    //var show = document.getElementById('scores');
    //if(show === "none"){
    //    show.style.display = "flex";
    //    show="flex";
   //     return;
   //}
  




    
  /*localStorage.getItem(initials,score);*/
  console.log(scoreHistory);

}

function resetScore() {
    localStorage.setItem(scoreHistory.initials, "");
    localStorage.setItem(scoreHistory.score,"");

console.log(scoreHistory);
}

function getResult(){
    document.documentElement.scrollIntoView("SectionOne");
    document.getElementById("ResultInitials").innerHTML.textContent = initials;
    document.getElementById("ResultScore").innerHTML.textContent = score;
    getScore();
}


function gameReturn(){
        
    document.documentElement.scrollIntoView("scores");
    //document.getElementById("SectionThree").scrollTop = 0;
//    var show = document.getElementById('scores');
//   
//   if (show === "flex"){
//          show.style.display = "none";
//          show="none";
//          return;
//   }
}

document.getElementById("start").addEventListener("click",function(){startGame()});
document.getElementById("clear").addEventListener("click",function(){resetScore()});
document.getElementById("back").addEventListener("click",function(){gameReturn()});
document.getElementById("Trophy").addEventListener("click",function(){getResult()});
document.getElementById("a").addEventListener("click",function(){checkResultA(selectedButtonA)}); 
document.getElementById("b").addEventListener("click",function(){checkResultB(selectedButtonB)});
document.getElementById("c").addEventListener("click",function(){checkResultC(selectedButtonC)});
document.getElementById("d").addEventListener("click",function(){checkResultD(selectedButtonD)});
