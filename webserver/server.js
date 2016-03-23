var config = {
    defaultPort: 8000
}

// commander and options parsing goes first since the node server -h command
// from the commander package stops processing as soon as parse(process.argv)
// is run.
var options = require('commander');
options
    .option('-p, --port <n>', 'Specify port to run development server on (' + config.defaultPort + ')', parseInt)
    .parse(process.argv);

console.log(">>>>> Starting development server");
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
var app = express();
var open = require('open');

var serverPort = options.port || config.defaultPort;

//For Jade as Index.html
app.set("views", path.join(__dirname, '../esri-app/src'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({
    //uploadDir: '/tmp/uploads',
    extended: false
        // keepExtentions: false
}));
app.use("/static", express.static(path.join(__dirname, '../esri-app/src/app')));
app.get('/', function(req, res) {
    res.render('index', {
        title: 'index'
    });
});

//For Static HTML
/*
//if index.html is static (not Jade)
app.use(
    '/', //the URL throught which you want to access to you static content
    express.static(path.join(__dirname, '../esri-app/src'), {
        index: 'index.html'
    }) //where your static content is located in your filesystem
);
*/
app.listen(serverPort); //the port you want to use

open("http://localhost:" + serverPort);
console.log(">>>>> Development server started at: http://localhost:" + serverPort);