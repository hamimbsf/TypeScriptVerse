// class --> oop

// class Animal {
//   name: string;
//   species: string;
//   sounds: string;

//   constructor(name: string, species: string, sounds: string) {
//     this.name = name;
//     this.species = species;
//     this.sounds = sounds;
//   }

//   makeSound() {
//     console.log(`${this.name} bhai making sound ${this.sounds}`);
//   }
// }

// amra uporer code e onek bar ekoi code bar bar likhechi etake redundant na korte chaile amra parameter property use korte pari

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sounds: string,
  ) {}

  makeSound() {
    console.log(`${this.name} bhai making sound ${this.sounds}`);
  }
}

const dog = new Animal("Dogesh Via", "Dog", "Hue Hue Hue");
const oggy = new Animal("Oggy", "Cat", "ha ha ha");

dog.makeSound();
