const marvel_heroes = ["Spiderman", "Ironman", "Captain America"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes) // add at the end of array 
// console.log(marvel_heroes); //Outtput--> ['Spiderman','Ironman','Captain America', [ 'Superman', 'Flash', 'Batman' ] ]

const allHeroes = marvel_heroes.concat(dc_heroes)  // add at the end of array as an endividual element 
console.log(allHeroes); //Output--> ['Spiderman','Ironman','Captain America', 'Superman', 'Flash', 'Batman' ]

const all_heroes2 = [...marvel_heroes, ...dc_heroes]  // add at the end of array as an individual element 
console.log(all_heroes2); //Output--> ['Spiderman','Ironman','Captain America', 'Superman', 'Flash', 'Batman' ]

const another_array = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const real_another_array = another_array.flat(Infinity) // its flat the array and return a new array

console.log(real_another_array); // Output--> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
