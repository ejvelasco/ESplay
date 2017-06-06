"use strict";

module.exports = (app, $, JSHINT, examplesES6) => {	

	app.factory("ESplayMethods", ($http) => {
	
		const myCodeMirror = CodeMirror(document.getElementById("code"), {
			theme: "dracula",
			gutters: ["CodeMirror-lint-markers"],
			lint: true, 
			lineNumbers: true, 
			autoCloseBrackets: true
		});
		myCodeMirror.setValue("/*jshint esversion: 6*/\n/* Enter some next-gen JS below or choose an example. Happy coding! */\n");
 		
 		const ESplayMethods = {
 			clear(){
 				return () =>{
 					myCodeMirror.setValue("/*jshint esversion: 6*/\n/* Enter some next-gen JS below or choose an example. Happy coding! */\n");	
 					window.frames[0].document.body.innerHTML = "";
 				}
 			},
 			setUpExamples($scope){
 				$scope.examplesES6 = [];
 				for( let example of examplesES6 ){
 					$scope.examplesES6.push(example);
 				}
 			},
 			selectExample(example){
 				const str = "/*jshint esversion: 6*/\n\n";
 				myCodeMirror.setValue(
 					`${str + "/* " + example.desc + " */"} 
 					${example.code}`
 				);
 				window.frames[0].document.body.innerHTML = "";
 			},

 			transpile($scope, $http, called){
 				
 				return () => {
 					
 					const message = {code: myCodeMirror.getValue() };
 					$http.post('/transpile', message)
 					.then((res) => {	
 						const data = res.data;
 						const code = data.result.code;
 						let output;
 						if ( !called ) {
 							output = `let logs = [];
 							let log = console.log;
 							console.log = function(){
 							   logs.push(arguments);
 							   log.apply(console, arguments);
 							}
 							${code}
 							let para, t;
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
 						} else {
 							output = `
 							logs = [];
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
 						}
 						const frame = window.frames[0]; 
 						frame.document.open();
 						frame.document.write("<!DOCTYPE html>");
				        frame.document.write("<html>");
				        frame.document.write("<head>");
				        frame.document.write("<link rel='stylesheet' href='/css/main.css'>");
				        frame.document.write("</head>");
				        frame.document.write("<body>");
				        frame.document.write("<script type='text/javascript'>" + output + "</script>");
				        frame.document.write("</body>");
				        frame.document.write("</html>");
				        frame.document.close();
						called = true;
 					});	
 				}
 			}
 		}
 		return ESplayMethods;
	});

}