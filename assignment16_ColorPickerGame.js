var squares = document.querySelectorAll(".square");
var numSquares = 6;
var colors = generateColorArray(numSquares);

setSquaresColors();

var goalColor = chooseGoalColor();

function chooseGoalColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = goalColor;
var messageDisplay = document.getElementById("message");
var titleDisplay = document.querySelector("h1");

var resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", resetGame);
var easyBtn = document.getElementById("easy");
easyBtn.addEventListener("click", easyDifficulty);
var hardBtn = document.getElementById("hard");
hardBtn.addEventListener("click", hardDifficulty);


function generateColorArray(arrLength) {
	var arr = [];
	for (var i = 0; i < arrLength; i++) {
		arr.push(generateColor());
	}
	return arr;
	console.log(arr);
}

function generateColor() {
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function setSquaresColors() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", guessColor);
	}
}

function guessColor() {
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor);
	if (clickedColor === goalColor) {
		messageDisplay.textContent = "Correct!";
		changeColorsOnWin();
		resetBtn.textContent = "PLAY AGAIN?"
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Wrong! Guess again";
	}
}

function changeColorsOnWin() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = goalColor;
	}
	titleDisplay.style.backgroundColor = goalColor;
}

function resetGame() {
	colors = generateColorArray(numSquares);
	setSquaresColors();
	goalColor = chooseGoalColor();
	colorDisplay.textContent = goalColor;
	titleDisplay.style.backgroundColor = "#2A8ACB";
	resetBtn.textContent = "NEW COLORS"
	messageDisplay.textContent = "";
}

function easyDifficulty() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	hideHardSquares();
	numSquares = 3;
	resetGame();
}

function hardDifficulty() {
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	showHardSquares();
	numSquares = 6;
	resetGame();
}

function hideHardSquares() {
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.add("hidden");
	}
}

function showHardSquares() {
	for (var i = 3; i < squares.length; i++) {
		squares[i].classList.remove("hidden");
	}
}

//idea: expand on easy mode. Make larger differences between rgb #'s 
//and guarantee that all 3 are not close to each other'