//Global variables:
var pCount = 1;
var classCount = 1;
var transitionCount = 1;
var aniCount = 1;
var warnCount = 1;


//Global objects:
var tableArray = [];
var list = [];
var colorArray = ["red", "blue", "green", "yellow", "orange"];

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

//functions:

//Page1:
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
	for (x in objectK.contacts) {
		output += objectK.contacts[x].firstname + " / " + objectK.contacts[x].lastname + " / " + objectK.contacts[x].phonenumber + " / " + objectK.contacts[x].address + "<br />";
		document.getElementById('localStorage').innerHTML = output + "<br />" + "End of all of the information that was stored in localStorage.";
	}
}

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
	var elementOption = document.getElementById(id);
	document.getElementById('selectItem').removeChild(elementOption);
	
	//Remove paragraph
	var elementParagraph = document.getElementById(id);
	var whiteSpace = elementParagraph.nextSibling;
	document.getElementById('output').removeChild(whiteSpace);
	document.getElementById('output').removeChild(elementParagraph);
}

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

function showWarning() {
	if (warnCount == 3) {
		warnCount = 1;
	}
	
	if (warnCount == 1) {
	alert("Please be patient while all of the elements on this page load");
	}
	else {
		alert("The page is fully loaded.  Thank you for your patients during this demonstration!");
	}
	
	warnCount++;
}

function addHeading() {
	var heading = document.createElement("h2");
	//heading.id = "heading";
	var title = document.createTextNode("This Page Shows How to Use Events");
	heading.appendChild(title);
	document.getElementById('container').appendChild(heading);
}

function addNote() {
	var note = document.createElement("p");
	//note.id = "note";
	var text = document.createTextNode("Below you will experience several different JavaScript Events like onload, onTouch, etc.");
	note.appendChild(text);
	document.getElementById('container').appendChild(note);
}

function addDiv() {
	var div = document.createElement("div");
	var text = document.createTextNode("THIS IS A DIV ELEMENT.  CLICK ME!");
	div.appendChild(text);
	div.id = "div1";
	div.className = "blueDiv";
	div.addEventListener("click", rotateDiv1);
	div.addEventListener("mouseout", stopBoarder);
	div.addEventListener("mouseover", startBoarder);
	document.getElementById('container').appendChild(div);
}

function addDiv2() {
	var div = document.createElement("div");
	var text = document.createTextNode("DIV2 Click Me!");
	div.appendChild(text);
	div.id = "div2";
	div.addEventListener("click", colorDate);
	document.getElementById('div1').appendChild(div);
}

/* function addImage() {
	var image = document.createElement("img");
	var image2 = document.createElement("img");
	image.src = "/Media/mindBlown.PNG";
	image.src = "/Media/smiley.PNG";
	//image.src = "/Users/Matthew/Desktop/CIT 261/gitHub_repo/Schaupp-Matthew.github.io/Media/mindBlown.png";
	//image2.src = "/Users/Matthew/Desktop/CIT 261/gitHub_repo/Schaupp-Matthew.github.io/Media/smiley.png";
	image2.id = "smiley";
	image.id = "mindBlown";
	image.className = "mindBlown";
	image2.className = "smiley";
	document.getElementById('container').appendChild(image);
	document.getElementById('container').appendChild(image2);
	showWarning();
} */

function colorDate() {
	var div2 = document.getElementById('div2');
	var text = document.createTextNode("Color Transition Complete");
	div2.innerHTML = "Today's Date is: " + Date();
	div2.style.background = 'orange';
	div2.appendChild(text);
}

function rotateDiv1() {
	var div1 = document.getElementById('div1');
	
	if (aniCount ==3) {
		aniCount = 1;
	}
	
	if (aniCount == 1) {
	div1.style.transform = 'rotateY(360deg)';
	}
	else {
	div1.style.transform = '';
	}
	
	aniCount++;
}

function startBoarder() {
	var div1 = document.getElementById('div1');
	div1.className = "aniDiv1";
}

function stopBoarder() {
	var div1 = document.getElementById('div1');
	div1.className = "blueDiv";
}

function setEventListeners() {
	var canvas = document.getElementById('canvas');
	var button1 = document.getElementById('button1');
	var button2 = document.getElementById('button2');
	var button3 = document.getElementById('button3');
	var button4 = document.getElementById('button4');
	var img = document.getElementById('monaLisa');
	canvas.addEventListener("mouseover", draw1);
	canvas.addEventListener("mouseout", draw2);
	img.addEventListener("click", picture);
	button1.addEventListener("click", draw3);
	button2.addEventListener("click", draw4);
}

function draw1() {
	var canvas = document.getElementById('canvas');
	var draw = canvas.getContext("2d");
	draw.fillStyle = "blue";
	draw.fillRect(0,0,650,300);
}

function draw2() {
	var canvas = document.getElementById('canvas');
	var draw = canvas.getContext("2d");
	draw.fillStyle = "white";
	draw.fillRect(0,0,650,300);
}

function draw3() {
	var canvas = document.getElementById('canvas');
	var draw = canvas.getContext("2d");
	draw.font = "20px Arial";
	draw.strokeText("MONA LISA",90,30);
}

function draw4() {
	var canvas = document.getElementById('canvas');
	var draw = canvas.getContext("2d");
	draw.moveTo(130,100);
	draw.lineTo(115,110);
	draw.moveTo(145,100);
	draw.lineTo(160,110);
	draw.moveTo(130,130);
	draw.lineTo(140,150);
	draw.moveTo(132,130);
	draw.lineTo(140,150);
	draw.moveTo(134,130);
	draw.lineTo(140,150);
	draw.moveTo(136,130);
	draw.lineTo(140,150);
	draw.moveTo(138,130);
	draw.lineTo(140,150);
	draw.moveTo(140,130);
	draw.lineTo(140,150);
	draw.moveTo(142,130);
	draw.lineTo(140,150);
	draw.moveTo(144,130);
	draw.lineTo(140,150);
	draw.moveTo(146,130);
	draw.lineTo(140,150);
	draw.moveTo(148,130);
	draw.lineTo(140,150);
	draw.moveTo(150,130);
	draw.lineTo(140,150);
	draw.stroke();
}

function picture() {
	var canvas = document.getElementById('canvas');
	var draw = canvas.getContext("2d");
	var img = document.getElementById('monaLisa');
	draw.drawImage(img, -50, -30);
}

function transitionOne() {
	var div = document.getElementById('transition');
	var currentClass = div.className;
	
	if (currentClass == "example") {
		div.className = "transitionExample";
	}
	else {
		div.className = "example";
	}
}