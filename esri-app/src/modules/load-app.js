var _map;
var _init = function(map) {
    _map = map;
    console.log("set map")
}

var _setMapCenter = function() {
    debugger;
    //_map.centerAt([0, 0]);

    window.require(["esri/map", "dojo/dom", "esri/layers/FeatureLayer"], function(Map, dom, FeatureLayer) {
        console.log("center done");
    });
}

var _clickButton = function() {
    var button = require('./../app/views/button.jade');
    console.log(button());
}

module.exports = {
    init: _init,
    setMapCenter: _setMapCenter,
    clickButton: _clickButton
}