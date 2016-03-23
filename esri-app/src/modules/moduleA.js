var moduleB = require('./moduleB');
var moduleC = require('./moduleC');

window.require([], function() {

    console.log("testing require");
    module.exports = function(x) {
        return x * moduleB(x + 5)
    };
});