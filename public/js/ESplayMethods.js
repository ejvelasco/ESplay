"use strict";

module.exports = (app, $) => {	

	app.factory("ESplayMethods", ($http) => {
 		const ESplayMethods = {
 			sayHi(){
 				console.log("Hey from methods!");
 			}
 		}
 		return ESplayMethods;
	});

}