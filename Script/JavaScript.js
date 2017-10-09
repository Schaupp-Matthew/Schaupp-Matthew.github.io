//Global variables:


//Global objects:
tableArray = [];
list = [];


//functions:
function numGame() {
	var a = Math.floor((Math.random()*100)+1);
	var g;
	numberGuessGame(g,a);
}

function numberGuessGame(guess,answer) {
var message = 
	"I'm thinking of a number between 1 and 100.\n" +
	"Try to guess it! You have 10 guesses to win!\n" +
	"Please enter an integer between 1 and 100.";
 
var guess;
var guessCount = 0;

do {
	guess = parseInt(window.prompt(message));
	if (guessCount > 10) {
		message = "You loose :(";
		window.alert(message);
		break;}
	else if (guess < answer) {
		message = guess + " is too low. Please enter another integer.";
		guessCount++;}
	else if (guess > answer) {
		message = guess + " is too high. Please enter another integer.";
		guessCount++}
} while (guess != answer);

if (guess == answer){
	message = guess + " is correct!"; 
	var messageGuess = "Number of guesses: " + guessCount;
	window.alert(message);
	window.alert(messageGuess);}
}

function addRow() {
	
	var t = document.getElementById('timeDate').value;
	var f = document.getElementById('feeding').value;
	var a = document.getElementById('amount').value;
	var b = document.getElementById('bm').value;
	var w = document.getElementById('wetDiaper').value;
	
	//document.getElementById('tableOutput').innerHTML = t;
	
	var row = new Object();
		row.timeDate = t;
		row.feeding = f;
		row.amount = a;
		row.bm = b;
		row.wetDiaper = w;
	
	//var row = {timeDate:"getElementById("timeDate")", feeding:"getElementById("feeding")", amount:"getElementById("amount")", bm:"getElementById("bm")", wetDiaper:"getElementById("wetDiaper")"};
	
	//document.write(row.timeDate);
	
	//var table = [row];

	//var addRow = 
	tableArray.splice(0, 0, row);
	
	
	
	document.getElementById('tableOutput').innerHTML = tableArray.toString();
	
	
}

function addItem() {
	var add = document.getElementById('add').value;
	list.splice(0, 0, add);
}

function removeItem() {
	
}

function showList () {
	
	
	document.getElementById('list').innerHTML = list.toString();
	
	
}

function jokes() {
	jokesArray = ["What do you call a three humped camel?", "What do you call a bear with no shoes?", "What did the digital watch say to its mother?"];
	answerArray = ["Pregnant!", "Bare foot!", "Look ma! No hands!"];
	var i = 0
	var x = 0;
	
	Do {
		window.alert(jokesArray[x]);
		window.alert(answerArray[x]);
		x++;
		i++;
	} 
	while (i < 3);
	
	document.getElementById('jokes').innerHTML = "Thank you, thank you.  I'll be here whenever you need a laugh."
	
}

