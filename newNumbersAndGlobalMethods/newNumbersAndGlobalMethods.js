// result is true
const num = 5;
console.log(isFinite(num));

// result is false
const num = Infinity;
console.log(isFinite(num));


// result is false
const num = NaN;
console.log(Number.isFinite(num));


// if is number then result false 
const sumA = 5;
console.log(isNaN(sumA));

// if is string then result true 
const sum = "as Rakib";
console.log(isNaN(sum));


// is Integer or not 
const sumA = -5;
const sumB = 5;
const sumC = 5.8;
console.log(Number.isInteger(sumA));
console.log(Number.isInteger(sumB));
console.log(Number.isInteger(sumC));


