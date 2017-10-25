//Global variables:
var pCount = 1;
var classCount = 1;
var transitionCount = 1;
var aniCount = 1;


//Global objects:
tableArray = [];
list = [];

var jsonObjectJ;

var person = new Object();
var place = new Object();
var thing = new Object();
var objectJ = {"contacts":[
	{"firstname":"<h3>First Name</h3>", "lastname":"<h3>Last Name</h3>", "phonenumber":"<h3>Phone Number</h3>", "address":"<h3>Address</h3>"},
	{"firstname":"Matthew", "lastname":"Smith", "phonenumber":"7928739878", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Nathan", "lastname":"Smith", "phonenumber":"6988766878", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Jonathan", "lastname":"Smith", "phonenumber":"3457657899", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Jessica", "lastname":"Smith", "phonenumber":"87667887678", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Michael", "lastname":"Smith", "phonenumber":"98778998789", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Ashley", "lastname":"Smith", "phonenumber":"98756754320", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Ariana", "lastname":"Smith", "phonenumber":"6577659878", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Alivia", "lastname":"Smith", "phonenumber":"98777778987", "address":"8273 Imaginary Dr. Los Angeles, CA 98764"}
	]
}

/* var objectJ = {"contacts":[
	{"firstname":"Matthew", "lastname":"Smith", "numbers":["7928739878", "7938748789"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Nathan", "lastname":"Smith", "numbers":["6988766878", "7898767898"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Jonathan", "lastname":"Smith", "numbers":["3457657899", "4566549876"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Jessica", "lastname":"Smith", "numbers":["87667887678", "23443223432"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Michael", "lastname":"Smith", "numbers":["98778998789", "23443223429"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Ashley", "lastname":"Smith", "numbers":["98756754320", "2457650987"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Ariana", "lastname":"Smith", "numbers":["6577659878", "5677655677"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"},
	{"firstname":"Alivia", "lastname":"Smith", "numbers":["98777778987", "0987787899"], "address":"8273 Imaginary Dr. Los Angeles, CA 98764"}
	]
} */


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
	
	//var t = document.getElementById('timeDate').value;
	var f = document.getElementById('feeding').value;
	var a = document.getElementById('amount').value;
	var b = document.getElementById('bm').value;
	var w = document.getElementById('wetDiaper').value;
	
	//document.getElementById('tableOutput').innerHTML = t;
	
	var row = new Object();
		//row.timeDate = t;
		row.timeDate = Date();
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

function removeI() {
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
		person.action = function() {
			var sayHello = "Hello!  My name is " + person.name + ". " + "Nice to meet you, and I hope you have a great day!";
			document.getElementById('output2').innerHTML = sayHello;
		}
		var output = person.name + " has been created!";
		document.getElementById('output').innerHTML = output;
		
		var bob = Object.create(person);
			bob.name = "Hi, my name is Bob down here!"  //Not, " + person.name + ".";
			document.getElementById('inherit').innerHTML = bob.name + "<br/><br/>Inherited Description: <br/>" + bob.description;
	}
	else if (x == "Place") {
		place.name = document.getElementById('name').value;
		place.description = document.getElementById('description').value;
		place.action = function() {
			var description = place.name + ": <br />" + place.description;
			document.getElementById('output2').innerHTML = description;
		}
			var output = place.name + " has been created!";
			document.getElementById('output').innerHTML = output;
			
		var durban = Object.create(place);
			durban.name = "Durban, South Africa is down here!"; 
			document.getElementById('inherit').innerHTML = durban.name + "<br/><br/>Inherited Description: <br/>" + durban.description;
	}
	else if (x == "Thing") {
		thing.name = document.getElementById('name').value;
		thing.description = document.getElementById('description').value;
		thing.action = function() {
			var what = "Wow!  You have a " + thing.name + " with these specs: <br />" + thing.description; 
			document.getElementById('output2').innerHTML = what;
		}
		var output = thing.name + " has been created!";
			document.getElementById('output').innerHTML = output;
			
		var phone = Object.create(thing);
			phone.name = "I am a phone down here!  Ring-ring!!!";
			document.getElementById('inherit').innerHTML = phone.name + "<br/><br/>Inherited Description: <br/>" + phone.description;
	}
}

function myFirstJSON() {
	var i;
	var tableJ = "<table border='1'>";
	
	for (i = 0; i < objectJ.contacts.length; i++) {
		tableJ += "<tr><td>" + objectJ.contacts[i].firstname + "</td>" + "<td>" + objectJ.contacts[i].lastname + "</td>" + "<td>" + objectJ.contacts[i].phonenumber + "</td>" + "<td>" + objectJ.contacts[i].address + "</td></tr>";
	}
	tableJ += "</table>";
	document.getElementById("tableJOutput").innerHTML = "<p>You have just used JSON stringify to turn the object that contains all of the data in this table into a JSON string.</p><br/>" + tableJ;
	
	jsonObjectJ = JSON.stringify(objectJ);
	
	localStorage.setItem("tableObject", jsonObjectJ);
	
	var stringifyOutput = "<p>This is what the JSON stringified object now looks like:</p><br/>" + jsonObjectJ;
	
	document.getElementById('stringifyOutput').innerHTML = stringifyOutput;
	
}

function myFirstParse() {
	var parseObjectJ = JSON.parse(jsonObjectJ);
	
	var message = "Now the JSON string with the objects data has been turned back into an object which can be used again";
	document.getElementById('message').innerHTML = message;
	
	var example = "For example: " + parseObjectJ.contacts[3].firstname + "'s" + " phone number is " + parseObjectJ.contacts[3].phonenumber + ".";
	document.getElementById('example').innerHTML = example;
}

function dadJokes() {
	var dadJokes = new XMLHttpRequest();
	dadJokes.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var jokesJSON = JSON.parse(this.responseText);
			var status = this.statusText;
			document.getElementById('status').innerHTML = status;
			document.getElementById('jokesJSON').innerHTML = jokesJSON.joke;
		}
		else {
			var status = this.statusText;
			document.getElementById('status').innerHTML = status;
		}
	};
	dadJokes.open("GET", "https://icanhazdadjoke.com/", true);
	dadJokes.setRequestHeader("Accept", "application/json");
	dadJokes.send();
}

function getLocalStorage() {
	
	var x, output;
	var someData = localStorage.getItem("tableObject");
	var objectK = JSON.parse(someData);
	//document.write(objectK);
	//for (x = 0; x < objectK.contacts.length; x++) {
	for (x in objectK.contacts) {
		//document.write(x);
		//document.write(objectK.contacts[x].address);
		//document.write(objectK.contacts[x].firstname + " / " + objectK.contacts[x].lastname + " / " + objectK.contacts[x].phonenumber + " / " + objectK.contacts[x].address);
		output += objectK.contacts[x].firstname + " / " + objectK.contacts[x].lastname + " / " + objectK.contacts[x].phonenumber + " / " + objectK.contacts[x].address + "<br />";
		document.getElementById('localStorage').innerHTML = output + "<br />" + "End of all of the information that was stored in localStorage.";
	}
	//document.write("<br />" + "End of all of the information that was stored in localStorage.");
}

/* <<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 43bd9a51d38b129b9d17be0b6cc6fa0084d0f096 */
function addTitle(){
	var heading = document.createElement("h2");
	var title = document.createTextNode(document.getElementById('title').value);
	heading.appendChild(title);
	document.getElementById('output').appendChild(heading);
}

function addParagraph () {
	var p = document.createElement("p");
	var br = document.createElement("br");
	p.id = "Paragraph" + pCount;
	var paragraph = document.createTextNode(document.getElementById('paragraph').value);
	p.appendChild(paragraph);
	document.getElementById('output').appendChild(p);
	document.getElementById('output').appendChild(br);
	
	var option = document.createElement("option");
	option.value = "Paragraph" + pCount;
	option.id = "Paragraph" + pCount;
	option.appendChild(document.createTextNode("Paragraph " + pCount));
	document.getElementById('selectItem').appendChild(option);
	
	pCount++;
}

function removeItem() {
	
	//Remove option
	var id = document.getElementById('selectItem').value;
	//id = document.getElementById('selectItem').id;
	//document.write(id);
	var elementOption = document.getElementById(id);
	document.getElementById('selectItem').removeChild(elementOption);
	
	//Renumber options and paragraphs
	/* pCount = 1;
	
	var select = document.getElementById('selectItem');
	var i;
	do {
		
		i++;
	} while (i < select.length);
	document.write(i); */
	
	//Remove paragraph
	var elementParagraph = document.getElementById(id);
	var whiteSpace = elementParagraph.nextSibling;
	//document.write(whiteSpace);
	document.getElementById('output').removeChild(whiteSpace);
	document.getElementById('output').removeChild(elementParagraph);
		
	//pCount--;
}
/* <<<<<<< HEAD
>>>>>>> 43bd9a51d38b129b9d17be0b6cc6fa0084d0f096
=======
>>>>>>> 43bd9a51d38b129b9d17be0b6cc6fa0084d0f096 


<body class="">
				<header class="">
					<h1>Manipulating CSS Class Properties Using JavaScript</h1>
				</header>
				
				<h2 class="">Examples:</h2>
					<p class="">Every element of this web page can be manipulated using JavaScript.  Try to find and click on every element within the body of this page to completely change it.</p>
					<button onclick="changeClass()" class="">BUTTON</button>
				<div class="">This is a div.</div>
				<canvas class="" style="border:1px solid #000000"></canvas>
		</body>*/

function changeClass() {
	if (classCount == 4) {
		classCount = 1;
	}
	
	var body = document.getElementById('BODY');
	//var bodyJ = JSON.stringify(body);
	//document.write(bodyJ);
	var header = document.getElementById('HEADER');
	var h2 = document.getElementById('H2');
	var paragraph = document.getElementById('P');
	var button = document.getElementById('BUTTON');
	var div = document.getElementById('DIV');
	var canvas = document.getElementById('CANVAS');
	var c = canvas.getContext("2d");
	
	if (classCount == 1) {
		body.className = "class1";
		header.className = "class1";
		h2.className = "class1";
		paragraph.className = "class1";
		button.className = "class1";
		div.className = "class1";
		c.fillStyle = "#ff0000";
		c.fillRect(100, 100, 100, 100);
	}
	else if (classCount == 2) {
		body.className = "class2";
		header.className = "class2";
		h2.className = "class2";
		paragraph.className = "class2";
		button.className = "class2";
		div.className = "class2";
		c.fillStyle = "#cc33ff";
		c.fillRect(50, 50, 250, 500);
	}
	else {
		body.className = "class3";
		header.className = "class3";
		h2.className = "class3";
		paragraph.className = "class3";
		button.className = "class3";
		div.className = "class3";
		c.fillStyle = "#0099cc";
		c.fillRect(0, 0, 300, 300);
	}
	
	classCount++;
	//document.write(classCount);
}

//growBox('transition1', '700px', '350px', '#ffcc00', 'rotate(180deg)')
function growBox(id, width, height, color, transform) {
	var box1 = document.getElementById(id);
	
	if (transitionCount ==3) {
		transitionCount = 1;
	}
	
	if (transitionCount == 1){
		//box1.style.transition = "width 2s, height 2s, background-color 2s, transform 2s";
		box1.style.width = width;
		box1.style.height = height;
		box1.style.background = color;
		box1.style.transform = transform;
	}
	else {
		//box1.style.transition = "width 2s, height 2s, background-color 2s, transform 2s";
		box1.style.width = '50px';
		box1.style.height = '50px';
		box1.style.background = 'blue';
		box1.style.transform = 'rotate(360deg)';
	}
	
	transitionCount++;
}

function runBox(id) {
	var box2 = document.getElementById(id);
	
	if (aniCount ==3) {
		aniCount = 1;
	}
	
	if (aniCount == 1) {
	box2.className = "div3";
	}
	else {
		box2.className = "div2";
	}
	
	aniCount++;
}