
var count = 15;
// var interval = setInterval(function () {
//     document.getElementById('count').innerHTML = count;
//     count--;
//     if (count === 0) {
//         clearInterval(interval);
//         document.getElementById('count').innerHTML = 'Done';
//         // or...
//         alert("You're out of time!");
//     }
// }, 1000);

var questions = [
{
question: "Entering comments is a useless task, it will not help in anyway.",
choices: ["True", "False"], 
Answer: "False"
},

{
    question: "A short section of code written to cpmplete a task." ,
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