var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');
app.use(session({secret: 'codingdojorocks'})); 

app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000, function() {
})
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
