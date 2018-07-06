var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var buttonReset = document.querySelector("#resetGame");
var buttonEasy = document.querySelector("#easy");
var buttonHard = document.querySelector("#hard");
var numberOF = 6;
var colorPicked = startGame(numberOF);
var correctPosition;



for(var i=0; i< squares.length; i++){
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;  
        if (clickedColor === colorPicked) {
                messageDisplay.textContent = "Correct";
                changeColors();
                buttonReset.textContent = "New game";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
    })
}

function changeColors(){
    for(var i = 0; i < squares.length ; i++){
        squares[i].style.backgroundColor = colorPicked;
    }
    document.querySelector("h1").style.backgroundColor = colorPicked;
}

function pickColor(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    return "rgb(" + x + ", " + y + ", " + z + ")";
}

function startGame(numberOfSquares){
    document.querySelector("h1").style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    buttonReset.textContent = "New colors";
    colorPicked = pickColor();
    correctPosition = getRandomInt(numberOfSquares);
    for(var i=0; i < numberOfSquares ; i++){
        if (i != correctPosition) {
            squares[i].style.backgroundColor = pickColor();
        }
        else{
            squares[correctPosition].style.backgroundColor = colorPicked;
        }
    }
    colorDisplay.textContent = colorPicked;
    return colorPicked;
}

buttonReset.addEventListener("click", function(){
    colorPicked = startGame(numberOF);
})

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

buttonEasy.addEventListener("click", function(){
    buttonEasy.classList.add("selected");
    buttonHard.classList.remove("selected");
    numberOF = 3;
    var squaresToHide = document.querySelectorAll(".extraDifficulty");
    for(var i = 0 ; i < squaresToHide.length ; i ++){
        squaresToHide[i].style.visibility = "hidden";
    }
    startGame(numberOF);

})

buttonHard.addEventListener("click", function(){
    buttonEasy.classList.remove("selected");
    buttonHard.classList.add("selected");
    numberOF = 6;
    var squaresToShow = document.querySelectorAll(".extraDifficulty");
    for(var i = 0 ; i < squaresToShow.length ; i ++){
        squaresToShow[i].style.visibility = "visible";
    }
    startGame(numberOF);

})