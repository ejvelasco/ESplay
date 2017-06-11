"use strict";

module.exports = (app, $) => {	

	app.controller("ESplayCtrl",["$scope", "$http", "ESplayMethods", ($scope, $http, ESplayMethods) => {
		//set up data
		ESplayMethods.setUpExamples($scope);
		ESplayMethods.setUpLibs($scope);
		ESplayMethods.setUpThemes($scope);
		//set up methods
		$scope.clear = ESplayMethods.clear();
		$scope.transpile = ESplayMethods.transpile($scope, $http, false);
		$scope.selectExample = (example) => {
			ESplayMethods.selectExample(example);
		}
		$scope.selectLib = (lib) => {
			ESplayMethods.selectLib($scope,lib);
		}
		$scope.selectTheme = (theme) => {
			ESplayMethods.selectTheme($scope, theme);
		}

	}]);
	
};
