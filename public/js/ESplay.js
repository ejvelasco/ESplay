(() => {
	"use strict";
	const angular = require("angular");
	const $ = global.jQuery = require('jquery');
	const JSHINT = require("jshint").JSHINT;
	//set up angular application
	const ESplayApp = angular.module("ESplayApp", []);
	require("./ESplayMethods")(ESplayApp, $, JSHINT);
	require("./transpileCtrl")(ESplayApp, $);
	//bootstrap
	require("bootstrap");	
	require("./numberText");
	
})();


