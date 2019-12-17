var funcs = require('./file2.js')();

//console.log(funcs);

funcs.setData('data1');

var func = require('./file3.js');

//console.log(funcs);

funcs.viewData();

var funcs1 = require('./file2.js')();
funcs1.setData('new data');
funcs.viewData();
funcs1.viewData();

//Examples of file4.js
var func = require('./file4.js');

func.viewData();

func.setData('new data');

var func1 = require('./file4.js');

func1.viewData();