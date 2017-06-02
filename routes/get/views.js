module.exports = (app, babel) => {
	app.get("/", (req, res) => {
	    	res.render("main");
  	});
  	app.post("/transpile", (req, res) => {
  		console.log(req.body)
	  //   	const result = babel.transform(req.body, {
			// 	presets: ["es2015"]
			// });
			// console.log(result);
	    	// res.json({result: result});
  	});
};
