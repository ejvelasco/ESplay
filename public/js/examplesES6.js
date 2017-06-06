"use strict";

module.exports = [
	{
		title: "Arrow Functions",
		desc: `An arrow function expression has a shorter syntax than a function expression
and does not bind its own this, arguments, super, or new.target. These function 
expressions are best suited for non-method functions, and they cannot be used as 
constructors.`,
		code: `
//shorter syntax
var planets = ['Coruscant', 'Hoth', 'Tatooine', 'Kashyyyk'];

var planetsLenth1 = planets.map(function(planet) { 
  return planet.length; 
}); 

var planetsLength2 = planets.map(planet => planet.length); 

//inherited this
function Jedi(name) {
	this.name = name;
	this.switchToDarkSide = () => {
		this.name = "Darth Vader"; // |this| refers to Jedi instance
	};
}

var jedi = new Jedi("Anakin Skywalker");
console.log(jedi.name); // Anakin Skywalker
jedi.switchToDarkSide();
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

var dog = new Dog('Macy');
dog.speak(); // Macy the German Shepherd barks.
dog.switchBreed(); 
dog.speak(); // Macy the Chihuahua barks.`
	},
	{
		title: "Enhanced Object Literals",
		desc: `Object literals are extended to support shorthand for foo: foo 
assignments, defining methods, making super calls, and computing property 
names with expressions. Together, these also bring object literals and class 
declarations closer together, and let object-based design benefit from some 
of the same conveniences.`, 
		code: `
var printKeys = function(object){
	var keys = Object.keys(object);
	for(var i = 0; i < keys.length; i++){
		console.log(keys[i]);
	}
};
var obj = {
    // Shorthand for ‘handler: handler’
    printKeys,
    // Methods
    toString() {
    	// Super calls
     	return "d " + super.toString();
    },
    // Computed (dynamic) property names
    [ 'prop_' + (() => 42)() ]: 42
};

obj.printKeys(obj);`
	}
];