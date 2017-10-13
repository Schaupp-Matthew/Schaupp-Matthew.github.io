//Global variables:


//Global objects:
tableArray = [];
list = [];

var person = new Object();
var place = new Object();
var thing = new Object();


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
	var x = list.pop();
	document.getElementById('list').innerHTML = x + " was removed from the list.";
}

function showList () {
	document.getElementById('list').innerHTML = list.toString();
}

function jokes() {
	jokesArray = ["What do you call a three humped camel?", "What do you call a bear with no shoes?", "What did the digital watch say to its mother?"];
	answerArray = ["Pregnant!", "Bare foot!", "Look ma! No hands!"];
	var i = 0
	var x = 0;
	
	do{
		window.alert(jokesArray[x]);
		window.alert(answerArray[x]);
		x++;
		i++;
	} 
	while (i < 3);
	
	document.getElementById('jokes').innerHTML = "Thank you, thank you.  I'll be here whenever you need a laugh.";
	
}

function createPost() {
	var post = new Object();
		post.make = document.getElementById('make').value;
		post.model = document.getElementById('model').value;
		post.year = document.getElementById('year').value;
		post.miles = document.getElementById('miles').value;
		post.description = document.getElementById('description').value;
		
	var output = 	"Make: " + post.make + "<br />" +
					"Model: " + post.model + "<br />" +
					"Year: " + post.year + "<br />" +
					"Miles: " + post.miles + "<br />" +
					"Description: " + post.description;
					
	document.getElementById('post').innerHTML = output;
	
}

function createObject() {
	var x = document.getElementById('objectType').value;
	
	if (x == "Person") {
		person.name = document.getElementById('name').value;
		person.description = document.getElementById('description').value;
		person.action = action() {
			var sayHello = "Hello!  My name is " + person.name + ". " + "Nice to meet you, and I hope you have a great day!";
			document.getElementById('output2').innerHTML = sayHello;
		}
		var output = person.name + " has been created!";
		document.getElementById('output').innerHTML = output;
	}
	else if (x == "Place") {
		place.name = document.getElementById('name').value;
		place.description = document.getElementById('description').value;
		place.action = action() {
			var description = place.name + ": <br />" + place.description;
			document.getElementById('output2').innerHTML = description;
		}
			var output = place.name + " has been created!";
			document.getElementById('output').innerHTML = output;
	}
	else (x == "Thing") {
		thing.name = document.getElementById('name').value;
		thing.description = document.getElementById('description').value;
		thing.action = action() {
			var what = "Wow!  You have a " + thing.name + " with these specs: <br />" + thing.description; 
			document.getElementById('output2').innerHTML = what;
		}
		var output = thing.name + " has been created!";
			document.getElementById('output').innerHTML = output;
	}
}

