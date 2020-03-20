"use strict";

// -------WEEK 1-------

// Source: https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php

// 1. Write a JavaScript program to list the properties of a JavaScript object. Go to the editor

// Sample object:

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Sample Output: name,sclass,rollno

var keys = Object.keys(student); // Targets the object "student" and returns the key/value pairs within, storing them within the variable "keys"

console.log(keys);

//--------------------------------------

// 2. Write a JavaScript program to delete the "rollno" property from the following object. Also print the object before or after deleting the property.

delete student.rollno; // Targets "student" object and executes "delete" function for specified "rollno" property
console.log(student);

//--------------------------------------

// 3. Write a JavaScript program to get the length of a JavaScript object.

var objectSize = Object.keys(student).length; // Targets "student" object, looks at key value pairs within, and returns the length. NOTE: expected output should be "2" key value pairs, since last property "rollon" was previously deleted.
console.log("The object contains " + objectSize + " properties.");

//--------------------------------------

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.

// Sample Code:

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];

for (var i = 0; i < library.length; i++) { // Iterates through "library" object completely (e.g. through entire length)
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + "."; // Individual element defined as "book" will be returned, containing just the title and author properties
    if (library[i].readingStatus) { // Determinant condition is "readingStatus"...if status is True, return "have read" message...
        console.log("You have already read " + book);
    } else {
        console.log("You still need to read " + book); // If "readingStatus" value is False, return "have not read" message...
    }
}

//--------------------------------------

// 9. Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

function circle(radius) { // Function that will grab the radius
    this.area = function () {
        return (Math.PI * radius * radius)
    };
    this.perimeter = function () {
        return (2 * Math.PI * radius)
    };
}

var test = new circle(3); // Will run the circle function with a specific input (e.g. 3) and store it in new variable "test"

console.log('Area =', test.area().toFixed(2));
console.log('Perimeter =', test.perimeter().toFixed(2));

// -------WEEK 2-------

// https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

// 1. Write a JavaScript program that accept two integers and display the larger.

function showLarger(a, b) {
    if (a > b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
showLarger(50, 100);

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.

function productSign(a,b,c){
    if((a * b * c ) >= 0){
        console.log("The combined product sign of " + a + " x " + b + " x " + c + " is: Positive (+)")
    } else{
        console.log("The combined product sign of " + a + " x " + b + " x " + c + " is: Negative (-)")
    }
}
productSign(1,-2,3);

// 3. Write a JavaScript conditional statement to sort three numbers.

var sortNumbers = function(){
    console.log([].slice.apply(arguments).sort(function(a, b) {
        return a - b;
    }));
};
sortNumbers(300,-2,-55,11);

// 4. Write a JavaScript conditional statement to find the largest of five numbers.

function getMax (x){
    return console.log(Math.max(x));
}
getMax(300,-2,-55,11);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

function oddOrEven() {
    for (let i = 1; i < 16; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even.")
        } else {
            console.log(i + " is odd.")
        }
    }
}
oddOrEven();

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

// Sample Code:

const students = [
{
    name: "David",
    marks: 80,
},
{
    name: "Vinoth",
    marks: 77,
},
{
    name: "Divya",
    marks: 88,
},
{
    name: "Ishitha",
    marks: 95,
},
{
    name: "Thomas",
    marks: 68,
}
];


const average = students.reduce((r, {marks}) =>
    r + marks
    , 0) / students.length;

if (average < 60) {
    console.log("The class average is " + average + " which is a letter grade of " + "F.");
} else if (average < 70) {
    console.log("The class average is " + average + " which is a letter grade of " + "D.");
} else if (average < 80) {
    console.log("The class average is " + average + " which is a letter grade of " + "C.");
} else if (average < 90) {
    console.log("The class average is " + average + " which is a letter grade of " + "B.");
} else if (average < 100) {
    console.log("The class average is " + average + " which is a letter grade of " + "A.");
}

// 7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

    function fizzBuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i + ": FizzBuzz")
        } else if (i % 3 === 0) {
            console.log(i + ": Fizz")
        } else if (i % 5 === 0) {
            console.log(i + ": Buzz")
        }
    }
}
    fizzBuzz();

// 10. Write a JavaScript program to construct the following pattern, using a nested for loop.

// Expected Output:
// *
// * *
// * * *
// * * * *
// * * * * *

let x, y, pattern;
for(x = 1; x <=6; x++) {
    for (y = 1; y < x; y++) {
        pattern = pattern + ("* ");
    }
    console.log(pattern);
    pattern ='';
}
