// Template literals are literals delimited with backticks ( ` ),
// allowing embedded expressions called substitutions.
// Untagged template literals result in strings, which makes them useful for string interpolation (and multiline strings,
// since unescaped newlines are allowed).

//es5
console.log("my name is as-Rakib" + "My age is 20");

// es6 
console.log(`My name is as-Rakib. My age is 20`);

// es5 
let firstName = "as";
let lastName = "Rakib";
console.log("My firstName is" + firstName + "My lastName is" + lastName + ".");


// es6 
console.log(`My firstName is ${firstName}. My lastName is ${lastName}.`);


// es5 
let a = 20;
let b = 30;
console.log("fifty is" + (a + b) + "and\nnot" +
    (2 * a + b) + ".");

// es6 
console.log(`fifty is ${a + b} + and
not ${2 * a + b}.`);