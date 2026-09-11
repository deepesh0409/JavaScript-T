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
console.log(loginUserMessage("Sam")) //this will give output Sam just logged in 