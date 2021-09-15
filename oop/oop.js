// first example 
class Students{
    constructor(name, age) {
          this.myName = name;
          this.myAge = age;
    };
    bioData(){
        console.log(`Hi, my name is ${this.myName}. I am ${this.myAge} years old`);
    };
};

let obj1 = new Students("as-Rakib", '20');
let obj2 = new Students("polash khan", '22');

obj1.bioData();
obj2.bioData();




//second example 
class Students {
    constructor(name, age) {
        this.myName = name
        this.myAge = age
    };
    // instance method
    bioData() {
        return (`Hi, my name is ${this.myName}. I am ${this.myAge} years old`);
    };
};

class Player extends Students {
    constructor(name, age, game) {
        super(name, age);
        this.myGame = game;
    };
    play_bioData() {
        return `${super.bioData()}. I am player of ${this.myGame}`;
    };
};

let obj1 = new Player("as-Rakib", '20', "cricket");
console.log(obj1.play_bioData());

let obj2 = new Students("polash khan", "27");
console.log(obj2.bioData());