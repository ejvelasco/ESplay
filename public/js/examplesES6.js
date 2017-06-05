"use strict";

module.exports = [
	{
		title: "Arrow Functions",
		description: "Arrows are a function shorthand using the => syntax. They are syntactically similar to the related feature in C#, Java 8 and CoffeeScript. They support both statement block bodies as well as expression bodies which return the value of the expression. Unlike functions, arrows share the same lexical this as their surrounding code.",
		code: `
			// Expression bodies
			var odds = evens.map(v => v + 1);
			var nums = evens.map((v, i) => v + i);
			var pairs = evens.map(v => ({even: v, odd: v + 1}));

			// Statement bodies
			nums.forEach(v => {
			  if (v % 5 === 0)
			    fives.push(v);
			});

			// Lexical this
			var bob = {
			  _name: "Bob",
			  _friends: [],
			  printFriends() {
			    this._friends.forEach(f =>
			      console.log(this._name + " knows " + f));
			  }
			}
		`
	}, 
	{
		title: "Classes",
		description: "ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.",
		code: `
			class SkinnedMesh extends THREE.Mesh {
			  constructor(geometry, materials) {
			    super(geometry, materials);

			    this.idMatrix = SkinnedMesh.defaultMatrix();
			    this.bones = [];
			    this.boneMatrices = [];
			    //...
			  }
			  update(camera) {
			    //...
			    super.update();
			  }
			  get boneCount() {
			    return this.bones.length;
			  }
			  set matrixType(matrixType) {
			    this.idMatrix = SkinnedMesh[matrixType]();
			  }
			  static defaultMatrix() {
			    return new THREE.Matrix4();
			  }
			}
		`
	}
];