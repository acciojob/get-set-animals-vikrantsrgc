// 1. Animal Class
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to log a sound message
  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

// 2. Cat Class (inherits from Animal)
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// 3. Dog Class (inherits from Animal)
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
