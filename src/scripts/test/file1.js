var funcs = require('./file2.js');

funcs.setData('data1');

var func = require('./file3.js');

//console.log(funcs);

funcs.viewData();

var funcs1 = require('./file2.js');
funcs1.setData('new data');
funcs.viewData();
funcs1.viewData();
