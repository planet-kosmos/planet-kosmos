"use strict";

//TODO: 1
//returns number of non nested items
var numArray =[2, [3, [5, 7]], 4, [7]];

let flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
let arrLength = arr => flatten(arr).length;
$('body').append(`<h1> LENGTH OF NON NESTED ITEMS = ${arrLength(numArray )}</h1>`);

//TODO: 2
//NUMBER OF DAYS IN BETWEEN DATES
const getDays = (day1,day2) => Math.abs((new Date(day1) - new Date(day2))/(24 * 60 * 60 * 1000));
$('body').append(` <h1> DIFFERENCE IN DAYS = ${getDays(new Date('June 1, 2019'), new Date('June 29, 2019'))}</h1>`);

//TODO: 3
//if word is in the middle when sorted alphabetically then return true
const isBetween = (first , last, word) => (first +',' + last + ',' + word).split( ',').sort()[1] === word  ;
$('body').append(`<h1> DIFFERENCE IN DAYS = ${isBetween("apple", "banana", "azure")} </h1>`);

//TODO: 4
//adds up digits of a number and returns oddish or evenish
const oddishOrEvenish = num => {
    if(num.toString().split('').reduce((a, b) => parseFloat(a) + parseFloat(b) ,0)% 2 === 0){ //turned to string split into an array, reduced and parsefloated to add them together
        return "Evenish"
    }
    else{
        return "Oddish"
    }
}
console.log(oddishOrEvenish(43234));
console.log(oddishOrEvenish("52"));

//TODO: 4
//takes a variable number of groups of items and returns all the possible combinations it each number can be arranged with each other. e.i multiplying the group of numbers together
function combinations(...args) {
    let bucket = [];
    args.forEach(function(arg){
        if(arg > 0){ // make sure 0 is not multiplied because it will bring the number to 0
            bucket.push(arg)
        }
    });
    return bucket.reduce((a,b) => a*b)
}

//TODO: 5
//after I finished the problem refactored it to make it shorter using filter
const combinationsAgain = (...args) =>
    args.filter(args => args != 0).reduce((a,b)=> a * b);//if args do not equal 0 filters them and reduces

console.log(combinations(2,3));
console.log(combinations(5,3, 8,0 ,7));
console.log(combinationsAgain(2,3));
console.log(combinationsAgain(5,3, 8,0 ,7));

//TODO: 6

//did an easy java from edabit but it took me longer than I thought.

// public class Challenge {
//     public static int calculator(int num1, char operator, int num2) {
//     if(operator == ('*')) {
//     return (int) (num1*num2);
// }
// if(operator == ('+')) {
//     return (int) (num1+num2);
// }
// if(operator == ('-')) {
//     return (int) (num1-num2);
// }
// if(num2 == 0 && operator == '/') {
//     return 0;
// }
// else{
//     return num1/num2;
// }
// }
// }