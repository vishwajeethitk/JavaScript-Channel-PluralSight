var repo = require('./file2.js');
console.log(repo.getData());

var funcs = function() {
    var data = "data";
    var setData =  function(data1) {
        data = data1;
    }
    var viewData = function() {
        console.log(data);
    }
    console.log('new funcs2 created' );
    //console.log(repo);

    return {
        setData: setData,
        viewData: viewData
    }
}

module.exports = funcs();