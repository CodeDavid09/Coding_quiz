
var count = 15;
var interval = setInterval(function () {
    document.getElementById('count').innerHTML = count;
    count--;
    if (count === 0) {
        clearInterval(interval);
        document.getElementById('count').innerHTML = 'Done';
        // or...
        alert("You're out of time!");
    }
}, 1000);

// Entering comments is a useless task, it will not help in anyway.
// True 
// False *

// A short section of code written to cpmplete a task.
// Buffer
// Array
// Function *

// A syntax error is?
// An error due to user error.
// An error caused by language rules being broken.*
// An error you will never find.

// What does this equation mean? a != T
// a is assigned to T
// a and T are equal.
// a is not equal to T.*
// T is added to a.

//Arrays in Javascript can be used to store?
// numbers and strings
// other arrays
// booleans
// All of the above*