// let a = 100

// if (true) {
//     let a = 10;
//     const b = 20;          
// }

// console.log(a); // ReferenceError: a is not defined
// // console.log(b); // ReferenceError: b is not defined
// // console.log(c); // 30



function one() {
    const username = "hello"
    
    function two() {
        const website = "youtube"
        console.log(username); //this print hello 
    }
    // console.log(website); // its show error website not defined 
    // two()
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        console.log(username+website);
    }
    // console.log(website); // this will show error website not defined 
}
// console.log(username); // this will show error as well username not defined

