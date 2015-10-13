'use strict'
 
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



