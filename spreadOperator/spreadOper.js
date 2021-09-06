//es5
function sum(a, b, c) {
    console.log(a + b + c);
};

var arrayVal = [1, 3, 4];
sum.apply(null, arrayVal);


//es6
function sumA(a, b, c) {
    console.log(a + b + c);
};

var arrayVal = [5, 3, 4];
sumA(...arrayVal);


// es5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
arr1 = arr1.concat(arr2);
console.log(arr1)

//es6 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6, 7];

arr1 = [...arr1, ...arr2];
arr1 = [...arr1, 10, 20, 30];
console.log(arr1)