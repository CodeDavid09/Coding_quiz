var wrapper = document.querySelector("#wrapper")
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
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
timer.addEventListener("click", function () {
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

function render(questionIndex) {
    quiz.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        // appends question 
        var userQuestions = questions[questionIndex].question;
        var userChoice = questions[questionIndex].choices;
        quiz.textContent = userQuestions;
    }
    

    userChoice.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        quiz.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare))
    })

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

    function allDone() {
        quiz.innerHTML = "";
        currentTime.innerHTML = "";
        // create the header when quiz is completed
        var createH1 = document.createElement("h1")
        createH1.setAttribute("id", "createH1");
        createH1.textContent = "QUIZ COMPLETED!"
        quiz.appendChild(createH1);

        var createP = document.createElement("p");
        createP.setAttribute("id", "createP");

        quiz.appendChild(createP);
    }
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP2.textContent = "Your final score is: " + timeRemaining;

        quiz.appendChild(createP2);
    }
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    quiz.appendChild(createLabel);

    // input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    quiz.appendChild(createInput);

    // submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    quiz.appendChild(createSubmit);

    // Event listener to capture initials and local storage for initials and score
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });
}