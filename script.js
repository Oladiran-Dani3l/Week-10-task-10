function Animal(name) {
    this.name = name;
}


Animal.prototype.speak = function() {
    console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        console.log(`${this.name} the ${this.breed} barks!`);
    }
}

const genericAnimal = new Animal("Bird");
genericAnimal.speak(); 

const myDog = new Dog("Romeo", "Rottweiler");
myDog.speak();


console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal); 
console.log(myDog.hasOwnProperty("name"));
console.log(myDog.hasOwnProperty("speak"));


const cat = Object.create(Animal.prototype);
cat.name = "Alao the village cat";
cat.speak(); 
console.log(cat.name());
