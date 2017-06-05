"use strict";

module.exports = (app, $) => {	

	app.controller("ESplayCtrl",["$scope", "$http", "ESplayMethods", ($scope, $http, ESplayMethods) => {
		ESplayMethods.setUpExamples($scope);
		$scope.transpile = ESplayMethods.transpile($scope, $http, false);
		$scope.selectExample = (example) => {
			ESplayMethods.selectExample(example);
		}
	}]);
	
};

