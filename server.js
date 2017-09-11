var express = require("express");
var app = express();
var session = require('express-session');
var bodyParser = require('body-parser');

app.use(session({secret: 'codingdojorocks'})); 
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000, function() {})
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
    response.render('index');
})

app.post("/add", function (request, response){
	request.session.name=request.body.name;
	request.session.location=request.body.location;
	request.session.language=request.body.language;
	request.session.comment=request.body.comment;
    response.redirect('/results')
})

app.get("/results", function (request, response){
	info= {
		name: request.session.name,
		location: request.session.location,
		language: request.session.language,
		comment: request.session.comment
	}
    response.render('results',{info: info});
})
