//Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ['Superman', 'Spiderman',]

// console.log(myArr[4]); 

//Array Methods
myArr.push(6) //its add into array at the end
myArr.pop() // its remove the last element from array

myArr.unshift(9) // its add into array at the beginning
myArr.shift() // its remove the first element from array 

// console.log(myArr.includes(9)) // its check the element is present in array or not and return true or false
// console.log(myArr.indexOf(3)) // its return the index of the element in array 

// console.log(myArr);

//Splice & Slice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3) // its 

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);
