var rightAnswer = 0;
var wrongAnswer = 0;
var noAnswer = 0;
var allocatedTime = 30;
var timer; 
//question array

var arryQuestions = [
	{
		title: "question1",
		question: "Who played Legolas in the LOTR movies?",
		choices: ["Orlando Bloom", "Brad Pitt", "Gal Gadot", "Prince"],
		correctChoice: "a"
	}, 
	{
		title: "question2",
		question: "Who saved all of Middle Earth?",
		choices: ["Sam", "Gandalf", "Tolkien", "Galadriel"],
		correctChoice: "Sam"
	}, 
	{
		title: "question3",
		question: "Where must the hobbits go to destroy the one ring?",
		choices: ["Rivendale", "The Shire", "Mt. Doom", "Rohan"],
		correctChoice: "Mt. Doom"
	}, 
	{
		title: "question4",
		question: "Who betrayed Gandalf and locked him in a tower?",
		choices: ["Elrond", "Saruman", "Treebeard", "Gollum"],
		correctChoice: "Saruman"	
	}, 
	{
		title: "question5",
		question: "Who had the ring before Frodo?",
		choices: ["Gandalf", "Legolas", "Arwen", "Bildo"],
		correctChoice: "Bildo"
	}, 
	{
		title: "question6",
		question: "How does one go into Mordor?",
		choices: ["you climb", "haha, you're funny,one does not simply walk into Mordor", "use the Nazgul", "too scared to go"],
		correctChoice: "haha, you're funny,one does not simply walk into Mordor"
	}];

//Display Timer

function displayTimer() {
	$(".time-remaining").html("Time Remaining<br>" + --sec + "<br>seconds");
}

function timeOver() {
	alert("Time's up. Nice Try.");
	checkResults();
}

function displayTrivia() {

	setInterval(displayTimer, 1000);

	timer = setTimeout(timeOver, 1000 * parseInt(sec));

	var trivia = "";

	for (var i = 0; i < arryQuestions.length; i++) {

		var possibleAnswers = "";

		for (var p = 0; p < arryQuestions[i].choices.length; p++) {
			possibleAnswers += "<br><input name=" + arryQuestions[i].title + " type='radio' value=" + arryQuestions[i].choices[p] + ">&emsp;" + arryQuestions[i].choices[p];
		}

		trivia += "<span class= 'question'>" + arryQuestions[i].question + "</span>" + possibleAnswers + "<hr>";
	}

	$(".quiz-layout").append(trivia);
	$(".form").show();
	$(".start").hide();
}

function checkResults() {
	var valid = "";
	var answer = "";

	for (var i = 0; i < arryQuestions.length; i++) {
		valid = $("input[name='" + arryQuestions[i].title + "']:checked").attr("value");
		answer = arryQuestions[i].correctChoice;

		if(valid === answer) {
			rightAnswer++;
		} else if (valid === undefined) {
			noAnswer++;
		} else {
			wrongAnswer++;
		}
	}

	displayResults(rightAnswer,wrongAnswer,noAnswer);

}

function displayResults(rightAnswer,wrongAnswer,noAnswer) {
	var finishedTrivia = arryQuestions.length;
	var message = "Your score: " + finishedTrivia + "<hr>Answered right: " + rightAnswer + "<br>Answered wrong: " + wrongAnswer + "<br>Unanswered: " + noAnswer;
	$(".score").html(message);
	$(".results").show();
	$(".form").hide();
}

function submitForm() {
	clearTimeout(timer);
	checkResults();
}

$(document).ready(function(){

	$(".start").click(displayTrivia);

	$(".submit").click(submitForm);
});