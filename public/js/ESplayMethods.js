"use strict";

module.exports = (app, $, JSHINT, examplesES6) => {	

	app.factory("ESplayMethods", ($http) => {
		//set up editor
		const myCodeMirror = CodeMirror(document.getElementById("code"), {
			theme: "dracula",
			gutters: ["CodeMirror-lint-markers"],
			lint: true, 
			lineNumbers: true, 
			autoCloseBrackets: true, 
			tabSize: 2
		});
		const $iframe = $('#iframe');
		myCodeMirror.setValue("/*jshint esversion: 6*/\n/* Enter some next-gen JS below or choose an example. Happy coding! */\n");
		$iframe.contents().find("head").append("<link rel='stylesheet' href='/css/main.css'>");
		//define app methods
 		const ESplayMethods = {
 			clear() {
 				return () =>{
 					myCodeMirror.setValue("/*jshint esversion: 6*/\n/* Enter some next-gen JS below or choose an example. Happy coding! */\n");	
 					window.frames[0].document.body.innerHTML = "";
 				}
 			},
 			setUpExamples($scope) {
 				$scope.examplesES6 = [];
 				for( let example of examplesES6 ){
 					$scope.examplesES6.push(example);
 				}
 			},
 			setUpLibs($scope){
 	 			$scope.libs = [
	 	 			{ 
	 	 				name: "Lodash 4.17.4", 
	 	 				url: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.min.js"
	 	 			},
	 	 			{ 
	 	 				name: "Underscore 1.8.3",
	 	 				url: "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"
	 	 			}
 	 			];
 	 			//set libs
 	 			this.libs = new Set();
 			},
 			setUpThemes($scope){
 				$scope.themes = [
		 			{ 
		 				name: "ESplay",
		 				hue: 30
		 			},
		 			{ 
		 				name: "Mint", 
		 				hue: 0
		 			},
		 			{ 
		 				name: "Spearmint",
		 				hue: 170,
		 			},
		 			{ 
		 				name: "Wintermint",
		 				hue: 220,
		 			},
		 			{ 
		 				name: "Lollipop",
		 				hue: 250,
		 			},
		 			{ 
		 				name: "Cinammon",
		 				hue: 280,
		 			},
		 			{ 
		 				name: "Tangerine",
		 				hue: 300
					}
				];
				//check first theme
				setTimeout(() => {
					$('.theme-0').addClass("dd-active");
				});
				//set themes
				this.theme = null;
				this.lastTheme = $scope.themes[0];
 			},
 			selectExample(example) {
 				const str = "/*jshint esversion: 6*/\n\n";
 				myCodeMirror.setValue(
 					`${str + "/* " + example.desc + " */"} 
 					${example.code}`
 				);
 				const theme = this.theme;
 				if(theme){
 					$(".CodeMirror-line span").css("filter", `hue-rotate(${theme.hue}deg)`);	
 				}
 				window.frames[0].document.body.innerHTML = "";
 			},
 			selectTheme($scope, theme) {
 				//set theme and get last theme
 				this.theme = theme;
 				let lastTheme = this.lastTheme;
 				//get link
 				let idx = $scope.themes.indexOf(theme);
 				let link = `.theme-${idx}`;
 				let linkHTML = $(link).html();
 				//select theme
 				$(link).addClass("dd-active");
 				$(".CodeMirror-line span").css("filter", `hue-rotate(${theme.hue}deg)`);
 				//deselect last theme
 				idx = $scope.themes.indexOf(lastTheme);
 				link = `.theme-${idx}`;
 				$(link).removeClass("dd-active");
 				//set last theme
 				this.lastTheme = theme;
 			},
 			selectLib($scope, lib) {
 				//set lib and get last
 				const idx = $scope.libs.indexOf(lib);
 				let link = `.lib-${idx}`;
 				let linkHTML = $(link).html();
 				//clear out frame
 				if (this.libs.has(lib.url)) {
 					linkHTML = `${lib.name}`;
 					$(link).html(linkHTML);
 					$iframe.contents().find("body").empty();
 					this.libs.delete(lib.url);
 				} else {
 					linkHTML += `&nbsp;&nbsp;<span class="glyphicon glyphicon-ok"></span>`;
 					$(link).html(linkHTML);
 					this.libs.add(lib.url);
 				}
 			},
 			transpile($scope, $http, called) {
 				
 				return () => {
 					
 					const message = {code: myCodeMirror.getValue() };
 					$http.post('/transpile', message)
 					.then((res) => {	
 						const data = res.data;
 						const code = data.result.code;
 						let output = "";
 						if ( !called ) {
 						output = `
 						let logs = [];
 						let log = console.log;
 						console.log = function(){
 						logs.push(arguments);
 						log.apply(console, arguments);
 						}`;
 						} else {
 							output = `logs = [];`;
 						} 
 						output += `
 						${code}                                      
 						setInterval(function(){
 						if(logs.length > 0){
 						for(let i = 0; i < logs.length; i++){
 						para = document.createElement("P");                       
 						t = document.createTextNode(logs[i][0]);      
 						para.appendChild(t); 
 						document.body.appendChild(para);
 						}
 						logs = [];
 						}
 						}, 30)`;
 						$iframe.contents().find("body").append(`<script type='text/javascript'>${output}</script>`);
 						called = true;
 					});
 				}
 			}
 		}
 		return ESplayMethods;
	});

}