$(document).ready(function() {
	$(".reset").click(function(){
		location.reload(true);
	});

	$(".start").click(gameQuiz);


	function gameQuiz() {
		var userScore =[];
		var questions = [
	{
		question: "Who played Legolas in the LOTR movies?",
		choices: ["Orlando Bloom", "Brad Pitt", "Gal Gadot", "Prince"],
		correctChoice: 0
	}, 
	{
		question: "Who saved all of Middle Earth?",
		choices: ["Sam", "Gandalf", "Tolkien","Galadriel"],
		correctChoice: 0
	}, 
	{
		question: "Where must the hobbits go to destroy the one ring?",
		choices: ["Rivendale", "The Shire","Mt. Doom","Rohan"],
		correctChoice: 2
	}, 
	{
		question: "Who betrayed Gandalf and locked him in a tower?",
		choices: ["Elrond","Saruman","Treebeard","Gollum"],
		correctChoice: 1	
	}, 
	{
		question: "Who had the ring before Frodo?",
		choices: ["Gandalf","Legolas","Arwen", "Bildo"],
		correctChoice: 2
	}, 
	{
		question: "How does one go into Mordor?",
		choices: ["you climb", "haha, you're funny,one does not simply walk into Mordor","use the Nazgul","too scared to go"],
		correctChoice: 1
	}
	];

}

	var questionCounter = questions.length;

	function questionLayout(questions) {
		for (var i = 0; i < questions.length; i++)
		{
			$(".start").hide();
			$(".quizGame").append("<form id="' + i + '" class="center-text"><p>Question ' + (i + 1) + ' of ' + questions.length + '</p><h3 class="question">' + questions[i].question + '</h3>'+ radioButtons(questions[i].s, i) + '<button type="submit" class="next">NEXT &#8594;</button></p></form>');
		}
	}

	function radioButton(ary, qNum) {
		var answers = [];
		for (i = 0; i < ary.length; i++) {
			answers.push('<label><input type="radio" name="' + qNum + '" value="' + ary[i] + '">' + ary[i] + '</label>')
		}
		return answers.join(" ");
	}

	function sumScore(questions) {
         return scoreAry.reduce(function (previousValue, currentValue, index, array) {
         return previousValue + currentValue;
         });
     }

            function checkAnswer(answer, qNum, questions) {
            if (answer == questions[qNum].choices) {
                questions[qNum].correct = 1;
                userScore.push(questions[qNum].correctChoice);
            } else {
                userScore.push(questions[qNum].correctChoice);
            }
        }
        
        createQuestion(questions);
        
        $(".next").click(function (event) {
            event.preventDefault(); //This stops the form from submitting
            var qNum = $(this).closest("form").attr("id"); //This gives us the question number
            var userInput = $('input[name=' + qNum + ']:radio:checked').val(); //This grabs the user's selected answer
            if (counter > 1) {
                checkAnswer(userInput, qNum, questions);
                $("#" + qNum).hide();
                $("#" + qNum).next().show();
                counter--;
            } else if (counter == 1) {
                checkAnswer(userInput, qNum, questions);
                $("#questions").find("form").remove();
                $("#questions").append('<h3 class="result"></h3>');
                $(".result").text('You answered ' + sumScore(questions) + ' questions correctly out of 6.');
                   for (j = 0; j < userScore.length; j++) {
                        if (userScore[j] === 0) {
                            console.log(questions[j].question, questions[j].choices);
                            $("#questions").append('<p class="missed-' + j + '">You missed: ' + questions[j].question + ' ' + questions[j].choices + '</p>');      
                        }
                    }
            } else {
                return false;
            }
        });
    }
});




