(() => {
	"use strict";

	const angular = require("angular");
	global.jQuery = require('jquery');
	//set up angular application
	const ESplayApp = angular.module("ESplayApp", []);
	require("./ESplayMethods")(ESplayApp, global.jQuery);
	require("./transpileCtrl")(ESplayApp, global.jQuery);
	//bootstrap
	require("bootstrap");	
})();


