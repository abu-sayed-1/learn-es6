//ES5 
function sumA(a, b, c, d, e, f, g, h) {
    console.log(a + b + c + d + e + f + g + h);
}
sumA(1, 2, 4, 5, 6, 8, 9, 4);


// ES6 
// example 1
const sum = (...data) => {
    console.log(...data);
    let total = 0;
    for (let i of data) {
        total += i;
    };
    console.log(total);
};
sum(1, 2, 3, 4, 56, 78, 9,);


// example 2
const restExa = (a, b, ...c) => {
    console.log(a, b);
    console.log(c.length);
    console.log(c[0]);
    console.log(c.indexOf("ahamed"));
};
restExa("as", "Rakib", "polash", "ali", "ahamed");

