const programmingLang = ["js", "php", 'python', "java", "c"];

const [js, php, python, java] = programmingLang;
console.log(js, php, python, java);

// skip array 1 and 2 index value example below
const [js, , , java] = programmingLang;
console.log(`my fav programming Lang is ${js} and ${java}`);

let first, second;
const langName = () => {
    [first, second] = programmingLang;
}
langName();
console.log(first, second);

// a value = b  b value = a
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(` the value of a is ${a} and the value of b is ${b}.`);


