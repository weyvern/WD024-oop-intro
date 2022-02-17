// In JS we use something called prototypal inheritance vs a classical inheritance
class Animal {
  constructor(habitat = 'living rooms', legs = 4) {
    this.habitat = habitat;
    this.legs = legs;
  }

  sleep() {
    console.log('zzzzzzzzzzzz');
  }
}

class Dog extends Animal {
  #name;
  #favActivities;
  constructor(name, breed) {
    super();
    this.#name = name;
    this.breed = breed;
    this.#favActivities = ['barking', 'running'];
    this.isGoodBoy = true;
  }

  get getName() {
    return this.#name;
  }

  set setName(newName) {
    this.#name = newName;
  }

  get listHobbies() {
    return this.#favActivities.forEach(hobby => console.log(hobby));
  }

  set addHooby(newHobby) {
    this.#favActivities.push(newHobby);
  }
}

class Cat extends Animal {
  constructor(name, breed, habitat, legs) {
    super(habitat, legs);
    this.name = name;
    this.breed = breed;
    this.isGoodBoy = true;
  }
}

const randomAnimal = new Animal('Tundra', 4);
const myDog = new Dog('Rex', 'Chihuahua');
const myCat = new Cat('Felix', 'Tabby', 'My living room', 4);

console.log(randomAnimal);
console.log(myDog);
console.log(myCat);

randomAnimal.sleep();
myDog.sleep();
console.log(myDog.legs);

console.log(myDog instanceof Dog);
console.log(myDog instanceof Animal);
console.log(myDog instanceof Object);

myDog.setName = 'Max';
console.log(myDog.getName);

myDog.addHooby = 'eating';
myDog.addHooby = 'being a dog';
myDog.listHobbies;

class Shape {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get getName() {
    return this.#name;
  }

  set setName(name) {
    this.#name = name;
  }

  draw() {
    console.log('Draw shape');
  }
}

class Square extends Shape {
  constructor(name) {
    super(name);
  }

  draw() {
    console.log('Draw square');
  }
}

class Circle extends Shape {
  constructor(name) {
    super(name);
  }

  draw() {
    console.log('Draw circle');
  }
}

const shape = new Shape('random');
const square = new Square('square');
const circle = new Circle('circle');

shape.draw();
square.draw();
circle.draw();

console.log(shape instanceof Shape);
console.log(shape instanceof Object);
console.log(square instanceof Square);
console.log(square instanceof Shape);
console.log(square instanceof Object);
console.log(circle instanceof Circle);
console.log(circle instanceof Shape);
console.log(circle instanceof Object);
