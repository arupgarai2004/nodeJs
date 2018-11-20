var express = require('express');
var app = express();
var fs = require("fs");


var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( "users.json", 'utf8', function (err, data1) {
      // data = JSON.parse( data );
      // data["user4"] = user["user4"];
       console.log( data1 );
       //res.end( JSON.stringify(data));
   });
});

var server1 = app.listen(8083, function () {

  var host = server1.address().address
  var port = server1.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
///add end

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var server = app.listen(8082, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})