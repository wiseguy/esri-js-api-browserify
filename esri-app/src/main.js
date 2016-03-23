//Including Sass
require('./app/css/style.scss');
var $ = require("jquery");

//Using Require
window.require(["esri/Map",
    "esri/views/SceneView", "dojo/domReady!"
], function(Map, SceneView) {

    //Including Modules
    var moduleA = require('./modules/moduleA');
    var loadApp = require('./modules/load-app');

    console.log(moduleA(5));

    var map = new Map({
        basemap: "streets"
    });
    var view = new SceneView({
        container: "viewDiv",
        map: map,
        scale: 50000000,
        center: [-101.17, 21.78]
    });

    loadApp.init(map);

    setTimeout(function() {
        loadApp.setMapCenter(map);
    }, 3000);

    //Including Jade
    var button = require('./app/views/button.jade');
    //document.body.innerHTML = button();
    $("#container").append(button());

    $("#zoomTo").click(function() {
        debugger;
        loadApp.setMapCenter();
    })

});