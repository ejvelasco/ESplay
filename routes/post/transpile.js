module.exports = (app,babel) => {
	app.post("/transpile", (req, res) => {
		const result = babel.transform(req.body.code, {
			presets: ["es2015"]
		});
	    res.json(JSON.decycle({result: result}));
  	});
}
