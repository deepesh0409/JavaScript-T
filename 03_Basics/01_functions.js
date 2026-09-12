function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()

// adding of two number 
// function addTwoNumber(num1, num2){
//     console.log(num1 + num2);
// }

addTwoNumber() //if this is called it will give output NaN because no value is passed to the function
addTwoNumber(5, 5) //this will give output 10 because value is passed to the function

function addTwoNumber (num1, num2){
    // let result = num1 + num2 //this is the long form of code
    // return result

    return num1 + num2 //this is the short form of above two line code

}

const result = addTwoNumber(5,5) 
// console.log("Result:", result) // this give output Result: 10

function loginUserMessage(username){
    return `${username} just logged in`
}
// loginUserMessage("Sam") //this will not give any output because it is not called in console.log 
// console.log(loginUserMessage("Sam")) //this will give output Sam just logged in 

function calcutaleCartPrice(...num1){
    return num1
}
// console.log(calcutaleCartPrice(200, 300, 400, 500)) //this will give output [ 200, 300, 400, 500 ] because we are using rest operator in function parameter


// using object in the function parameter 
const user = {
    username: "sammy",
    price: 200
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) //this will give output Username is sammy and price is 200
}

// handleObject(user) //this will give output Username is sammy and price is 200

handleObject({
    username: 'Tim',
    price: 2000
}) 

//using arrays in the function parameter
const myNewArray = [200, 300, 400, 500]

function returnSecondaryArray (getArray){
    return getArray[1] //this will return the second element of the array
}

console.log(returnSecondaryArray(myNewArray)) //this will give output 300 because it is the second element of the array 
//this can be written in short form as below
console.log (returnSecondaryArray([100, 200, 300, 400])) //this will give output 200 because it is the second element of the array
