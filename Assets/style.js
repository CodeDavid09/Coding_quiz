var wrapper = document.querySelector("#wrapper")
var timer = document.querySelector("#timer");
var start = document.querySelector("#start");
var quiz = document.querySelector("#quiz");
// initial variables
var score = 0;
var questionIndex = 0;
// Timer variables
var secondsLeft = 75;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul")
// Question List
var questions = [
    {
        question: "Entering comments is a useless task, it will not help in anyway.",
        choices: ["True", "False"],
        Answer: "False"
    },

    {
        question: "A short section of code written to cpmplete a task.",
        choices: ["Buffer", "Array", "Function"],
        answer: "Function"
    },

    {
        question: "A syntax error is?",
        choices: ["An error due to user error.",
            "An error caused by language rules being broken.",
            "An error you will never find."],
        answer: "An error caused by language rules being broken."
    },

    {
        question: "What does this equation mean? a != T",
        choices: ["a is assigned to T", "a and T are equal", "a is not equal to T", "T is added to a"],
        answer: "a is not equal to T"
    },

    {
        question: "Arrays in Javascript can be used to store?",
        choices: ["numbers and strings", "other arrays", "booleans", "All of the above"],
        answer: "All of the above"
    }
]
// Timer event Listener
timer.addEventListener(click, function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time Remaining: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
            allDone();
            currentTime.textContent = "Time is up.";
        }
    }, 1000);
}
render(questionIndex);
});

function render (questionIndex){
    quiz.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i <questions.length; i++) {
        // appends question 
        var userQuestions = questions[questionIndex].question;
        var userChoice = questions[questionIndex].choices;
        quiz.textContent = userQuestions
    }

    userChoice.forEach(function (newItem){
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quiz.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare))
    })
}
// function to determine if answer selected by user is correct or incorrect.
function compare(event) {
    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct!"
        } else {
            secondsLeft = secondsLeft - penalty;
            createDiv.textContent = "Incorrect. The correct answer is: " + questions[questionIndex].answer;
        }
    }
}
// Questions completed
questionIndex++;

if (questionIndex >= questions.length) {
    allDone();
    createDiv.textContent = "Quiz Completed!" + "You got " + score + "/" + questions.length + " correct.";
} else {
    render(questionIndex);
}
quiz.appendChild(createDiv);