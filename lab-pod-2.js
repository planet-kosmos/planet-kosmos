"use strict"
//returns number of non nested items
var numArray =[2, [3, [5, 7]], 4, [7]];

let flatten = arr => Array.isArray(arr) ? [].concat(...arr.map(flatten)) : arr;
let arrLength = arr => flatten(arr).length;
$('body').append(`<h1> LENGTH OF NON NESTED ITEMS = ${arrLength(numArray )}</h1>`);


//NUMBER OF DAYS IN BETWEEN DATES
const getDays = (day1,day2) => Math.abs((new Date(day1) - new Date(day2))/(24 * 60 * 60 * 1000));
$('body').append(` <h1> DIFFERENCE IN DAYS = ${getDays(new Date('June 1, 2019'), new Date('June 29, 2019'))}</h1>`);

//if word is in the middle when sorted alphabetically then return true
const isBetween = (first , last, word) => (first +',' + last + ',' + word).split( ',').sort()[1] === word  ;
$('body').append(`<h1> DIFFERENCE IN DAYS = ${isBetween("apple", "banana", "azure")} </h1>`);
