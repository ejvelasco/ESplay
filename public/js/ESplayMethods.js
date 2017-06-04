"use strict";

module.exports = (app, $) => {	

	app.factory("ESplayMethods", ($http) => {
		var myCodeMirror = CodeMirror(document.getElementById("code"), {
			 lineNumbers: true, 
			 theme: "dracula"
		});
 		const ESplayMethods = {
 			enableTextareaTab($){
 				$("textarea").keydown(function(e) {
 					if(e.keycode === 9){
 				        var start = this.selectionStart;
 				        var end = this.selectionEnd;

 				        var $this = $(this);

 				        $this.val($this.val().substring(0, start)
 				                    + "\t"
 				                    + $this.val().substring(end));

 				        this.selectionStart = this.selectionEnd = start + 1;

 				        return false;
 				    }
 				});
 			},
 			transpile($scope, $http, called){
 				return () => {
 					const message = {code: myCodeMirror.getValue() };
 					console.log(message)
 					$http.post('/transpile', message)
 					.then((res) => {
 						const data = res.data;
 						let code = data.result.code;
 						let precode;
 						if(!called){
 							precode = `let logs = [];
 							let log = console.log;
 							console.log = function(){
 							   logs.push(arguments);
 							   log.apply(console, arguments);
 							}
 							${code}
 							let para, t;
 							for(let i = 0; i < logs.length; i++){
 								para = document.createElement("P");                       
 								t = document.createTextNode(logs[i][0]);      
 								para.appendChild(t); 
 								document.body.appendChild(para);
 							}`;
 						} else{
 							precode = `
 							logs = [];
 							${code}                                      
 							for(let i = 0; i < logs.length; i++){
 								para = document.createElement("P");                       
 								t = document.createTextNode(logs[i][0]);      
 								para.appendChild(t); 
 								document.body.appendChild(para);
 							}`;
 						}
 						
 						window.frames[0].document.open();
 						window.frames[0].document.write("<!DOCTYPE html>");
				        window.frames[0].document.write("<html>");
				        window.frames[0].document.write("<body>");
				        window.frames[0].document.write("<script type='text/javascript'>" + precode + "</script>");
				        window.frames[0].document.write("</body>");
				        window.frames[0].document.write("</html>");
				        window.frames[0].document.close();
						called = true;
 					});	
 				}
 			}
 		}
 		return ESplayMethods;
	});

}