var p1 = document.querySelectorAll("button")[0];
var p2 = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var goalInput = document.querySelector("input");
var goalText = document.querySelector("#goal");

var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var goal = 5;

p1.addEventListener("click", p1Click);
p2.addEventListener("click", p2Click);
reset.addEventListener("click", resetClick);
goalInput.addEventListener("change", editGoal);

function p1Click() {
	if (!gameOver) {
		p1Score++;
		document.querySelector("#p1Score").textContent = p1Score;
	}
	checkIfGameOver();
}

function p2Click() {
	if (!gameOver) {
		p2Score++;
		document.querySelector("#p2Score").textContent = p2Score;
	}
	checkIfGameOver();
}

function resetClick() {
		p1Score = 0;
		p2Score = 0;
		document.querySelector("#p1Score").textContent = p1Score;
		document.querySelector("#p1Score").classList.remove("won");
		document.querySelector("#p2Score").textContent = p2Score;
		document.querySelector("#p2Score").classList.remove("won");
		document.querySelector("h2").innerHTML = "<em>Playing to <span id=\"goal\">" + goal + "</span></em>";
		gameOver = false;
}

function checkIfGameOver() {
	if (p1Score === goal || p2Score === goal) {
		gameOver = true;
		if (p1Score === goal) {
			document.querySelector("#p1Score").classList.add("won");
		} else {
			document.querySelector("#p2Score").classList.add("won");
		}
		document.querySelector("h2").innerHTML = "<em>Game Over!</em>";
	}
}

function editGoal() {
	goalText.textContent = goalInput.value;
	goal = Number(goalInput.value);
	resetClick();
}