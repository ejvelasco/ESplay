"use strict";

module.exports = (app, $) => {	

	app.controller("transpileCtrl",["$scope", "$http", "ESplayMethods", ($scope, $http, ESplayMethods) => {
		ESplayMethods.enableTextareaTab($);
		$scope.transpile = ESplayMethods.transpile($scope, $http, false);
	}]);
	
};

