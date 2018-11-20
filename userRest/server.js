var express = require('express');
var app = express();
var fs = require("fs");
 var router      =   app.Router();

// for database coonection 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"; //database URL 


router.route("/listUsers")
    .get(function(req,res){
        var response = {};
        mongoOp.find({},function(err,data){
        // Mongo command to fetch all data from collection.
            if(err) {
                response = {"error" : true,"message" : "Error fetching data"};
            } else {
                response = {"error" : false,"message" : data};
            }
            res.json(response);
        });
    });

///list of users 
/*app.get('/listUsers', function (req, res) {
	

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("user-products");
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
	res.end(result);
    db.close();
  });
});
	
  /* fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });*/
});*/


var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

//add user
app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user4"] = user["user4"];
      console.log( data );
	  
	  fs.writeFile(__dirname + "/" + "users.json", data, function(err) {
    if(err) {
        return console.log(err);
    }
	  });
	  
      res.end( JSON.stringify(data));
   });
});



//var id = 2;
///delete user 
app.delete('/deleteUser/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
});

//find user  
app.get('/:id', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users[req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
});


var server = app.listen(3400, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
});