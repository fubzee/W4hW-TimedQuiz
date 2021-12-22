var timeEl = document.querySelector("#CountDownTimer");
//var gameOver = 0000;
var secondsLeft = {
    hours: 0,
    seconds: 6000
}
//    var countdown = document.querySelector("CountDown");                     
//    var startBtn = document.querySelector("#Start");
//    var backBtn = document.querySelector("Back");
//    var resetBtn = document.querySelector("Clear")
//    var button = document.querySelector("A");
//    var button = document.querySelector("B");
//    var button = document.querySelector("C");
//    var button = document.querySelector("D");
//    var question = document.querySelector("Question");
var score = document.querySelector("ResultScore");
var gameScore = 0;
var gameMsg = " ";
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
    setTime();
    stopQuiz();
}

function setTime() {
    secondsLeft = setInterval(countDown, secondsLeft, 1000);
}

function countDown(secondsLeft){
   
    secondsLeft--;
    timeEl.textContent = secondsLeft;  
    document.getElementById("CountDownTimer").style.display = "block";
    document.getElementById("CountDownTimer").innerHTML = timeEl.textContent;
    do {
      startQuiz();}    
    while (secondsLeft > 0);
    stopQuiz();
}
function startQuiz(){
      
    loadQuestion(); 
    
    selectedButton = false;
    selectedButton = document.getElementById("a").addEventListener("click",checkResult(selectedButton)); 
    selectedButton = document.getElementById("b").addEventListener("click",checkResult(selectedButton));
    selectedButton = document.getElementById("c").addEventListener("click",checkResult(selectedButton));
    selectedButton = document.getElementById("d").addEventListener("click",checkResult(selectedButton));

    checkResult(selectedButton);
    
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
async function checkResult(selectedButton) {
    
    if (selectedButton){
        if (selectedButton === question.correct[setQuestion]){
            gameScore = gameScore + 10;
            gameMsg = "Well Done! That is the correct answer your score is " + gameScore;
        }
        else {
            secondsLeft = secondsLeft - 1000;
            gameMsg = "Oops that is incorrect, the timer has been reduced by 10 seconds";
        }
        document.getElementById("result").innerHTML.textContent = gameMsg;
    }
    else {
        await sleep(3000);
        gameMsg = "You took to long to respond - the game will end";
        secondsLeft = 0;
    }
}

function sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
}

function stopQuiz(){
    addScore();
    gameMsg = "Game Over - Your final socre is " + gameScore;
    console.log(gameMsg);
    document.getElementById("result").innerHTML.textContent = gameMsg;
    document.getElementById("CountDownTimer").style.display = "none";
}

function addScore() {
    scoreHistory.initials=initials;
    scoreHistory.score=score;    
    localStorage.setItem("Score History",scoreHistory);
    console.log(scoreHistory);
}

function getScore(){

    var show = document.getElementById('scores');
    if(show === "none"){
        show.style.display = "flex";
        show="flex";
        return;
   }
  
    
  /*localStorage.getItem(initials,score);*/
  console.log(scoreHistory);

}

function resetScore() {
    localStorage.setItem(scoreHistory.initials, "");
    localStorage.setItem(scoreHistory.score,"");

console.log(scoreHistory);
}

function getResult(){
    document.getElementById("ResultInitials").innerHTML.textContent = initials;
    addScore();
    getScore();
}


function gameReturn(){
    var show = document.getElementById('scores');
   
   if (show === "flex"){
          show.style.display = "none";
          show="none";
          return;
   }
}

document.getElementById("start").addEventListener("click",startGame());
   
document.getElementById("clear").addEventListener("click",resetScore());

document.getElementById("back").addEventListener("click",gameReturn());

