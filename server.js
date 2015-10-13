'use strict';
/* 
var http = require('http'),
    fs = require('fs');

fs.readFile('./default.htm', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
    console.log("running at port 8080")
});
*/

var express = require('express');
var app = express();
//var path = require('path');

app.use('/public', express.static(__dirname + '/public'));
//app.use('/public/js', express.static(__dirname + '/public/js'));
//app.use('public/img', express.static(__dirname + 'public/img'));
app.get('/', function(req, res){
  //res.send('hello world');
  res.sendFile('default.htm',{'root':__dirname + '/public'}, function(err){
  	if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Resposne file sent');
    }
  });
  //res.end();
});

app.listen('3000',function(){
	console.log("Running at localhost:3000");
});



