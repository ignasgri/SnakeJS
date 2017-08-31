//settings 
var snakeX = 2;
var snakeY = 2;
var height = 30;
var width = 30;
var interval = 100;
var increment = 1;

//game variables
var tailX = [snakeX];
var tailY = [snakeY];
var fX;
var fY;
var running;
var gameOver;
var directions = -1; // up = 0, down = -1, left = 1, right = 2
var int;

//game start
function run(){
	init();
	ini = setInterval(gameLoop, interval);
}

function init(){
	createMap();
	createSnake();
	createFruit();
}
