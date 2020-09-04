var pos = 0;
var correct = 0;
var quiz, progress, question, choice, choices, chA, chB, chC;

var questions = ["What is 9+10?",
                  "Who is the current president of the US?",
                  "What is the name of UTD's official mascot?"
                  ];
var answers = ['B','A','B'];
var options = [["21", "19", "0"], 
                 ["Trump", "Deez Nuts","Richard Benson"],
                 ["Enarc","Temoc","Tobor"]];

function renderQuestion() {
  quiz = document.getElementById("quiz");;

  if (pos >= questions.length) {
    quiz.innerHTML =
      "<h2>You got " +
      correct +
      " of " +
      questions.length +
      " questions correct</h2>";
    document.getElementById("progress").innerHTML = "quiz completed";
    // resets the variable to allow users to restart the quiz
    pos = 0;
    correct = 0;
    // stops rest of renderQuestion function running when quiz is completed
    return false;
  }
  document.getElementById("progress").innerHTML =
    "Question " + (pos + 1) + " of " + questions.length;
  question = questions[pos];
  chA = options[pos][0];
  chB = options[pos][1];
  chC = options[pos][2];
  quiz.innerHTML = "<h3>" + question + "</h3>";
  // the += appends to the data we started on the line above
  quiz.innerHTML +=
    "<input type='radio' name='choices' value='A'> " + chA + "<br>";
  quiz.innerHTML +=
    "<input type='radio' name='choices' value='B'> " + chB + "<br>";
  quiz.innerHTML +=
    "<input type='radio' name='choices' value='C'> " + chC + "<br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for (var i = 0; i < choices.length; i++) {
    if (choices[i].checked) {
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if (choice == answers[pos]) {
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  renderQuestion();
}

window.addEventListener("load", renderQuestion, false);
