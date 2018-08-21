

//server Stuff
console.log('server start');
var express = require('express');
//this is like an import statment express is a function

var app = express();

var server = app.listen(4000, listening);

function listening(){
  console.log("listening .  . .");
}
app.use(express.static('website'));

//Get Request
//search here is a route the /: represents something
//the user will ente
