"use strict";

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
