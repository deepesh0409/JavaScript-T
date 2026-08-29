const name = "John"
const repoCount = 50

// console.log(name + repoCount + "Value"); This syntax is an outdated way to concatenate strings.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// second way to create a string is by using the String constructor.
const gameName = new String ('John Wick'); 

console.log(gameName[0]);
console.log(gameName.__proto__); //This is a way to concatenate string no need to call the proto to call the syntax of the string.

console.log(gameName.length); //This is a way to get the length of the string.
console.log(gameName.toUpperCase()); //This is a way to convert the string to uppercase.

const newString = gameName.substring(0, 4);
console.log(newString); //extracts characters from a string between two specified indices its take negative values but ignores it in output

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); //This is also take nehative values as well 

const newStringOne = "   John    "
console.log(newStringOne);
console.log(newStringOne.trim()); //This is a way to remove whitespace from both ends of a string.

const url = "https://example.com/example%20home"
console.log(url.replace('%20', '-')) // This syntax is used to replace a specified value with another value in a string.

