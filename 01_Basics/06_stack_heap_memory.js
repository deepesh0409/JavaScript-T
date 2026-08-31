// Stack (Primitive) & Heap (Non Primitive)

let myYoutubename = "iamgoodatcoding"

let anothername = "myYoutubename"
anothername = "iamgooddeveloper"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@example.com",
    upiID: "user@upi",
} 

let userTwo = userOne

userTwo.email = "user2@example.com"

console.log(userOne.email);
console.log(userTwo.email); 