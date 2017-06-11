"use strict";
const temp = "Hello ${name}, how are you ${time}?";
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
	}, 
	{
		title: "Template Literals",
		desc: `Template literals are enclosed by the back-tick (\`) character 
instead of double or single quotes. Template literals can contain 
place holders. These are indicated by the dollar sign and curly 
braces. The expressions in the place holders and 
the text between them get passed to a function. The default function 
just concatenates the parts into a single string. If there is an 
expression preceding the template literal (tag here),  the template 
string is called "tagged template literal". In that case, the tag 
expression (usually a function) gets called with the processed template 
literal, which you can then manipulate before outputting. To escape a 
back-tick in a template literal, put a backslash \ before the back-tick.`,
	code: `
// Multiline strings
var praise = \`This is seriously
so useful!\`;

// String interpolation
var name = "Bob", time = "today";
var greeting = \`${temp}\`;
console.log(greeting);`
	}, 
	{
		title: "Destructuring",
		desc: `The destructuring assignment syntax is a JavaScript expression 
that makes it possible to unpack values from arrays, or properties 
from objects, into distinct variables.`,
		code: `
// object matching
// var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

// object matching shorthand
// binds \`op\`, \`lhs\` and \`rhs\` in scope
// var {op, lhs, rhs} = getASTNode();

// list matching
var [a, , b] = [1,2,3];

console.log(a + b);

// Can be used in parameter position
function g({name: x}) {
  	console.log(x);
}
g({name: 5});

// Fail-soft destructuring
var [a] = [];
console.log(a);
// Fail-soft destructuring with defaults
var [a = 1] = [];
console.log(a);`
	},
	{
		title: "Rest Parameters",
		desc: `If the last named argument of a function is prefixed 
with ..., it becomes an array whose elements from 0 (inclusive) 
to theArgs.length (exclusive) are supplied by the actual 
arguments passed to the function.`, 
code: `
//Add an arbitrary number of integers
function addIntegers(...integers){
	if (integers.length === 0){
  	return null;
  }
	return integers.reduce((a,b) => a + b);
}
console.log(addIntegers(1,1,2,3,5,8));`
	}, 
	{
		title: "Default Parameters",
		desc: `In JavaScript, parameters of functions default to undefined. 
However, in some situations it might be useful to set a different 
default value. This is where default parameters can help. With 
default parameters in ES2015, the check in the function body is 
no longer necessary. Now, you can simply put 1 as the default value 
for b in the function head:`,
code: `
//old
function multiply(a, b) {
  	b = (typeof b !== 'undefined') ?  b : 1;
  	return a * b;
}

//new
function multiply(a, b = 1) {
  	return a * b;
}

console.log(multiply(5, 2)); 
console.log(multiply(5, 1)); 
console.log(multiply(5));`
	}, 
	{
		title: "Spread Operator",
	desc: `The spread syntax allows an expression to be expanded in 
places where multiple arguments (for function calls) or multiple 
elements (for array literals) or multiple variables (for 
destructuring assignment) are expected.`, 
		code: `
function sum(x, y, z) {
  	return x + y + z;
}
// Pass each elem of array as argument
console.log(sum(...[1,2,3]));

//array literals
var parts = ['shoulders', 'knees']; 
var lyrics = ['head', ...parts, 'and', 'toes']; 
console.log(lyrics.join(", "));`
	}, 
	{
		title: "Let",
		desc:`Variables declared by let have as their scope the 
block in which they are defined, as well as in any contained 
sub-blocks . In this way, let works very much like var. 
The main difference is that the scope of a var variable is the entire enclosing function:`, 
code: `
function varTest() {
  	var x = 1;
  	if (true) {
    	var x = 2;  // same variable!
    	console.log(x);  // 2
  	}
  	console.log(x);  // 2
}

function letTest() {
  	let x = 1;
  	if (true) {
    	let x = 2;  // different variable
    	console.log(x);  // 2
 	}
	console.log(x);  // 1
}
varTest();
letTest();`
	}
];