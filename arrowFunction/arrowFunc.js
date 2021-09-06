// Arrow function also called( "fat arrow functions")
// are undoubtedly one of the more popular features of ES6.
// they introduced a new way of writing concise functions.

//ES5
var sumA = function () {
    var a = 10;
    var b = 15
    return a + b
};
// console.log(sumA());

// ES6 
const sumB = () => {
    const a = 10;
    const b = 15;
    return a + b;
};
console.log(sumB());

const a = 30;
const b = 40;
const sumC = () => a + b;
console.log(sumC());

// default parameter example below
const sumD = (a, b = 20) => a * b;
console.log(sumD(15, 40));

// e6 mean 6 zero example below
const sumNum = 2e6;
console.log(sumNum);