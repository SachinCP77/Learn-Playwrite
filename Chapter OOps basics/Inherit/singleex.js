class Animal {
    constructor(name) {
        this.name = name;
    }

    sleep() {
        console.log(this.name, "is sleeping");

    }

    eat() {
        console.log(this.name, "is eatig");

    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    bark() {
        console.log(this.name, "is barking");

    }

}

let dog = new Dog("Rex", "Labrodder");
dog.sleep();
dog.eat();
dog.bark();

console.log(dog.name);
console.log(dog.breed);