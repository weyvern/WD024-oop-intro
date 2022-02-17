class Student {
  constructor(nameParam, ageParam, hobbiesParam) {
    this.name = nameParam;
    this.age = ageParam;
    this.hobbies = hobbiesParam;
  }

  greeting() {
    console.log(`My name is ${this.name} and I'm ${this.age} years old`);
  }

  study() {
    console.log('I like JS now');
  }

  talkAboutHobbies() {
    this.hobbies.forEach(hobby => {
      console.log(`My name ${this.name} and I looooove ${hobby}`);
    });
  }
}

const shawn = new Student('Shawn', 37, ['trekking', 'cooking']);

const natasha = new Student('Natasha', 21, ['sports', 'eating']);

console.log(shawn);
console.log(natasha);

shawn.study();
natasha.study();
shawn.greeting();
natasha.greeting();
shawn.talkAboutHobbies();

console.log(shawn instanceof Student);
console.log(shawn instanceof Object);
console.log(natasha instanceof Student);
console.log(natasha instanceof Object);
