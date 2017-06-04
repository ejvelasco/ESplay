"use strict";

module.exports = (app, $) => {	

	app.controller("transpileCtrl",["$scope", "$http", "ESplayMethods", ($scope, $http, ESplayMethods) => {
		// $scope.lint = ESplayMethods.lint();
		$scope.transpile = ESplayMethods.transpile($scope, $http, false);
	}]);
	
};

