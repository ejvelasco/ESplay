"use strict";

module.exports = [
	{
		title: "Arrow Functions",
		desc: `An arrow function expression has a shorter syntax than a function expression
and does not bind its own this, arguments, super, or new.target. These function 
expressions are best suited for non-method functions, and they cannot be used as 
constructors.`,
		code: `
var materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];

var materialsLength1 = materials.map(function(material) { 
  return material.length; 
}); // [8,6,7,9]

var materialsLength2 = materials.map(material => material.length); // [8,6,7,9]

class Jedi {
	constructor(name) {
		this.name = name;		
	}
  	switchToDarkSide(){ 
  		return () => {
  			this.name = "Darth Vader"; // |this| refers to Jedi instance	
  		};
  	}
}

var jedi = new Jedi("Anakin Skywalker");
console.log(jedi.name); // Anakin Skywalker
var switchToDarkSide = jedi.switchToDarkSide();
switchToDarkSide();
console.log(jedi.name); // Darth Vader
`
	}, 
	{
		title: "Classes",
		desc: `JavaScript classes introduced in ECMAScript 2015 are primarily syntactical 
sugar over JavaScript's existing prototype-based inheritance. The class syntax is not 
introducing a new object-oriented inheritance model to JavaScript. JavaScript classes 
provide a much simpler and clearer syntax to create objects and deal with inheritance.`,
		code: `
class Animal { 
	constructor(name) {
		this.name = name;
		this.breed = "German Shepherd";
	}
	switchBreed(){
		this.breed = "Chihuahua";
	}
	speak() {
		console.log(this.name + ' makes a noise.');
	}
}

class Dog extends Animal {
	speak() {
		console.log(this.name + ' the ' + this.breed + ' barks.');
	}
}

var dog = new Dog('Mitzie');
dog.speak(); // Mitzie the German Shepherd barks.
dog.switchBreed(); 
dog.speak(); // Mitzie the Chihuahua barks.`
	}
];