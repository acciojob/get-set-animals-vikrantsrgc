//complete this code
class Animal {
	constructor(species){
		this.species = species
	}
	 get species() {
		return this._species
	}
	makeSound(){
		return `The ${this.species} makes a sound`
	}
}

class Dog extends Animal {
	purr() {
		console.log("purr")
	}
}

class Cat extends Animal {
	bark() {
		console.log('woof')
	}
	
}
const myCat = new Cat("Siamese");
myCat.makeSound();  // The Siamese makes a sound
myCat.purr();       // purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound();  // The Golden Retriever makes a sound
myDog.bark();       // woof
