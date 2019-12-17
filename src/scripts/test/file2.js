var funcs = function() {
    var data = "data";
    var setData =  function(data1) {
        data = data1;
    }
    var viewData = function() {
        console.log(data);
    }
    var getData = function() {
        return data;
    }
    console.log('new funcs created');

    return {
        setData: setData,
        viewData: viewData,
        getData: getData
    }
}

module.exports = funcs;