var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var messageDisplay = document.getElementById("message");
// var messageDisplay = document.getElementById("message");
// var messageDisplay = document.getElementById("message");

var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");

var h1 = document.querySelector("h1");




colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
//add initial color
	squares[i].style.background = colors[i];

	//add click listener to square

	squares[i].addEventListener("click",function(){

		//grab color of clicked square
		var clickedcolor = this.style.background;
		//compare color to pickedcolor
		if(clickedcolor === pickedColor){

			messageDisplay.textContent = "Correct!";
			changeColors(clickedcolor);
			h1.style.background = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else{

			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";

		}
	});
}

function changeColors(color){
	//loop through all square
	for(var i=0; i < squares.length; i++){
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){

	//make an array
	var arr = [];

	//repeat num time
	for(i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from "0-255"
	var r = Math.floor(Math.random()*256);
	//pick a "green" from "0-255"
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from "0-255"
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r + ", " + g +", " + b +")";
}

resetButton.addEventListener("click",function(){
	//generate all new color
	colors = generateRandomColors(6);
	//pick a new random color from array
	var pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
//add initial color
	squares[i].style.background = colors[i];

	}
	h1.style.background = "#232323";
});