//Including Sass
require('./app/css/style.scss');
var $ = require("jquery");

//Using Require
window.require([
    "esri/Map",
    "esri/views/SceneView",
    "dojo/domReady!"
], function(Map, SceneView) {

    //Including Modules

    window.map = new Map({
        basemap: "streets"
    });
    
    var view = new SceneView({
        container: "viewDiv",
        map: map,
        scale: 50000000,
        center: [-101.17, 21.78]
    });

    var mapController = require('./modules/map-controller');
    mapController.init(view);


    //Including Jade
    var button = require('./app/views/button.jade');
    //debugger;
    //document.body.innerHTML = button();
    $("#ui-controls").append(button());
   
    $("#zoomTo").click(function() {
        mapController.setMapCenter();
        mapController.loadReactComp();
    });


});