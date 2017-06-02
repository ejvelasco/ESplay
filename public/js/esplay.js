const babel = require("babel-core");
global.jQuery = require('jquery');
require("bootstrap");
require("./main")(babel);
