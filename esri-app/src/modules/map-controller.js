var $ = require("jquery");

var _view;

var _init = function(view) {
    _view = view;
}

var _setMapCenter = function() {

    window.require(["esri/Camera","esri/geometry/Point"], function(Camera, Point) {
        var cam = new Camera({
            position: new Point({
                x: -100.23,
                y: 65,
                z: 10000, //in meters
                spatialReference: 4326
            }),
            heading: 180, //facing due south
            tilt: 45 //bird's eye view
        });
        _view.animateTo(cam);
    });
}

var _clickButton = function() {
    var button = require('./../app/views/button.jade');
    console.log(button());
}

var _loadReactComp = function() {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var HelloWorld = require('./../modules/react-module/view.jsx');
    ReactDOM.render( <HelloWorld/> , $("#react-comp")[0]);
}

module.exports = {
    init: _init,
    setMapCenter: _setMapCenter,
    clickButton: _clickButton,
    loadReactComp: _loadReactComp
}