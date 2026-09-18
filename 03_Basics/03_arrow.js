const user = {
    username: "Hello",
    price: 999,

    welcomeMessage: function() {
        console.log(` ${this.username}, welcome to website `)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);


// this line of code is not working because this keyword is not work in function.
// function chai(){
//     let username = "Hello"
//     console.log(this.username);
// }

// chai()

// this will also show undefined in the output 
// const chai = function (){
//     let username = "hiteh"
//     console.log (this.username);
// }

//this is an arrow function and this keyword and still says undefined 
// const chai = () => {
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// arrow function syntax ====   () => {}

    //basic way
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return way
// const addTwo = (num1, num2) =>  num1 + num2
                // or
const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(2, 3)) 