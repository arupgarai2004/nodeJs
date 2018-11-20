
var express=require('express');
var app=express();

var myLogger=function(req,res,next){
	req.reqTime= new Date();
	console.log("Logged");
	next();
}

app.use(myLogger);

app.get('/', function(req,res){
	res.send('Hello WOrld! '+req.reqTime);
});

app.listen(3000);