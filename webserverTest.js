/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var http=require('http');
var server= http.createServer(function(req,res){
   res.writeHead(200,{'Content-Type':'text/plain'});
   res.end("Hello Change...\n");
   
   
});
server.listen(9000,'localhost');
console.log("HTTP server Started at httt://localhost:9000/");
