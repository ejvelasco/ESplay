const babel = require("babel-core");
global.jQuery = require('jquery');
const $ = global.jQuery;
require("bootstrap");
require("./main");
require('./nav')($);
