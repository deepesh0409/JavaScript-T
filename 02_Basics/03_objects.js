// singleton
// object.create

//  object literals

const mySym = Symbol("ket1")

const JsUser = {
    name: "John",
    "full name": "Jodn Don",
    [mySym]: "Value of Symbol",
    age: 45,
    location: "Nre Jersey",
    email: "john@google.com",
    isloggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])

//how to change value of object property
JsUser.email = "john@gmail.com"

//freeze object
// Object.freeze(JsUser)
JsUser.email = "john@chat.com" // this will not work because object is frozen
// console.log(JsUser); // output -- { name: 'John','full name': 'Jodn Don',age: 45,location: 'Nre Jersey',email: 'john@gmail.com',isloggedIn: false,lastLoginDays: [ 'Monday', 'Saturday' ],Symbol(ket1): 'Value of Symbol'}

// this is a property of object which is a function, we can also call it method of object
JsUser.greeting = function(){
    console.log("Hello JS User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`); // this is how we can access the property of object using this keyword
    console.log(`Hello JS User, ${this["full name"]}`); // this is how we can access the property with space in it
}

console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo());