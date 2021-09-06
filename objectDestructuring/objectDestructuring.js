// object destructuring 
const bioData = {
    firstName: "as",
    lastName: "Rakib",
    age: 20,
    hobby: {
        travel: "travel",
        football: "football"
    }
};

// example 1
const { age, lastName, firstName, } = bioData;
console.log(`my firstName is ${firstName} and lastName is ${lastName} age ${age}`);

// example 2
let firstName, lastName, age;
({ firstName, lastName, age } = bioData);
console.log(firstName, lastName, age);

// example 3
const { firstName: name, lastName: last, hobby } = bioData;
console.log(name, last, hobby.football)

// example 4
const { age } = bioData;
console.log(age);


const { lastName } = bioData;
console.log(lastName);


const { firstName } = bioData;
console.log(firstName);


