module.exports = (app, babel) => {
	app.get("/", (req, res) => {
	    	res.render("main");
  	});
  	app.post("/transpile", (req, res) => {
	    const result = babel.transform(req.body.code, {
			presets: ["es2015"]
		});
	    res.json({result: result});
  	});
};
