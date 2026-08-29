const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toSring().length); //This convert the number to string and get the length of the string.
// console.log(balance.toFixed(1)); 

const otherNumber = 123.25
// console.log(otherNumber.toPrecision(3)); //This is a way to format a number to a specified length.

const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //This is a way to get the absolute value of a number.
// console.log(Math.round(4.4)); //This is a way to round a number to the nearest integer.
// console.log(Math.ceil(4.2)); // This is a way to round a number up to the nearest integer.
// console.log(Math.floor(4.9)); // This is a way to round a number down to the nearest integer.
// console.log(Math.min(4, 5, 10, 99,)); //This is a way to get the minimum value from a set of numbers.
// console.log(Math.max(65, 25, 45, 89)); //This is a way to get the maximum value from a set of numbers.

console.log(Math.random()); // This is a way to generate a random number between 0 and 1.
console.log((Math.random() * 10) + 1 ); // This is a way to generate a random number between 1 and 10.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // This is a way to generate a random number between a specified range (min and max).
