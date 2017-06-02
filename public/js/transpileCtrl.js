"use strict";

module.exports = (app) => {	

	app.controller("transpileCtrl",["$scope", "$http", "ESplayMethods", ($scope, $http, ESplayMethods) => {
		console.log("Sweet!");	
		ESplayMethods.sayHi();
	}]);
	
};

