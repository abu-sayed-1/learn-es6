//What is difference between let Var and const?

// var declarations are globally scoped or function scoped 
// while let and const are block scoped. var variables can be updated and re-declared within its scope;
// let variables can be updated but not re-declared;
// const variables can neither be updated nor re-declared but you can update array and object.
// They are all hoisted to the top of their scope.


// var examples below
var nam = "as Rakib";
nam = "Abu Sayed Rakib";

var firstName = "as Rakib";
var firstName = "khan oli"

function method 
var sumNam = "as";
function sum() {
    var sumNam = "Rakib";
    console.log(sumNam);

}
console.log(sumNam);
sum();


function sum() {
    if (true) {
        var nam = "Rakib khan";
    };
    console.log(nam);
}
sum();

// let examples below
// let variables can be updated but not re-declared
let firstNam = "Abu";
firstNam = "Sayed";

let firstName = "Abu";
let firstName = "Sayed";


// const examples below
// const variables can neither be updated. example below
const lastName = "Rakib";
lastName = "khan";

// but you can update array and object example below
const array = ["as", "Rakib", "20"];
array[0] = "oli";
console.log(array);

const array = [{
    firstName: "as",
    lastName: "Rakib",
    age: 20
}];
array[0].firstName = "oli";
console.log(array);

// let and const function example blew
function sum() {
    if (true) {
        let firstName = "as";
        const lastName = "Rkaib";
        console.log(firstName + " " + lastName);
    };
    // We can not get firstName and lastName values outside of block-scoped
    // because let and const are block-scoped.
    console.log(firstName + " " + lastName);
};
sum();
