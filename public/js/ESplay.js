(() => {
	"use strict";

	const angular = require("angular");
	const $ = global.jQuery = require('jquery');
	//set up angular application
	const ESplayApp = angular.module("ESplayApp", []);
	require("./ESplayMethods")(ESplayApp, $);
	require("./transpileCtrl")(ESplayApp, $);
	//bootstrap
	require("bootstrap");	
	require("./numberText");
	
})();


