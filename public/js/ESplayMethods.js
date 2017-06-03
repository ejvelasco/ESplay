"use strict";

module.exports = (app, $) => {	

	app.factory("ESplayMethods", ($http) => {
 		const ESplayMethods = {
 			enableTextareaTab($){
 				$("textarea").keydown(function(e) {
 				    if(e.keyCode === 9) { // tab was pressed
 				        // get caret position/selection
 				        var start = this.selectionStart;
 				        var end = this.selectionEnd;

 				        var $this = $(this);

 				        // set textarea value to: text before caret + tab + text after caret
 				        $this.val($this.val().substring(0, start)
 				                    + "\t"
 				                    + $this.val().substring(end));

 				        // put caret at right position again
 				        this.selectionStart = this.selectionEnd = start + 1;

 				        // prevent the focus lose
 				        return false;
 				    }
 				});
 			},
 			transpile($scope, $http){
 				return () => {
 					const message = {code: $scope.code};
 					$http.post('/transpile', message)
 					.then((res) => {
 						const data = res.data;
 						// console.log(data.result.code);
 						// console.log(data.result.map);
 						// console.log(data.result.ast);
 						$scope.console = data.result.code;
 					});	
 				}
 			}
 		}
 		return ESplayMethods;
	});

}