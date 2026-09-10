// const tinderUser = new Object() 

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// this shows function can be nested inside an object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Sam",
            lastname: "Altman"
        }
    }
}    

//this is a way to access the nested object
// console.log(regularUser.fullname.userfullname.lastname); //output-- Altman

// merging of two objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"} 

// const obj3 = {obj1, obj2} //this is called object shorthand notation & this is not user to merg not good practice // this give { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
// const obj3 = Object.assign(obj1, obj2) //this give out of { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj3 = Object.assign({}, obj1, obj2) // this give output { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } mostly used this way to merge objects

const obj3 = Object.assign({}, obj1, obj2, obj4) // this give output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } mostly used this way to merge objects

console.log(obj3);