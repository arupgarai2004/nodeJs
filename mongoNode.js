/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 
 //var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{ useNewUrlParser: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("user-products");
  /*dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });*/
  
  //insert
   

  var dbo = db.db("user-products");
  var myobj = [
    { userid:1, name: 'John', address: 'Highway 71'},
    { userid:2, name: 'Peter', address: 'Lowstreet 4'},
    { userid:3, name: 'Amy', address: 'Apple st 652'},
    { userid:4, name: 'Hannah', address: 'Mountain 21'},
    { userid:5, name: 'Michael', address: 'Valley 345'},
    { userid:6, name: 'Sandy', address: 'Ocean blvd 2'},
    { userid:7, name: 'Betty', address: 'Green Grass 1'},
    { userid:8, name: 'Richard', address: 'Sky st 331'},
    { userid:9, name: 'Susan', address: 'One way 98'},
    { userid:10, name: 'Vicky', address: 'Yellow Garden 2'},
    { userid:11, name: 'Ben', address: 'Park Lane 38'},
    { userid:12, name: 'William', address: 'Central st 954'},
    { userid:13, name: 'Chuck', address: 'Main Road 989'},
    { userid:14, name: 'Viola', address: 'Sideway 1633'}
  ];
  dbo.collection("users").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
  
  
  
   var myobj = [    
    {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2016",
        description: "Leaf rake with 48-inch wooden handle.",
        price: 19.95,
        starRating: 3.2,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        productId: 2,
        productName: "Garden Cart",
        productCode: "GDN-0023",
        releaseDate: "March 18, 2016",
        description: "15 gallon capacity rolling garden cart",
        price: 32.99,
        starRating: 4.2,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        productId: 5,
        productName: "Hammer",
        productCode: "TBX-0048",
        releaseDate: "May 21, 2016",
        description: "Curved claw steel hammer",
        price: 8.9,
        starRating: 4.8,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        productId: 8,
        productName: "Saw",
        productCode: "TBX-0022",
        releaseDate: "May 15, 2016",
        description: "15-inch steel blade hand saw",
        price: 11.55,
        starRating: 3.7,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        productId: 10,
        productName: "Video Game Controller",
        productCode: "GMG-0042",
        releaseDate: "October 15, 2015",
        description: "Standard two-button video game controller",
        price: 35.95,
        starRating: 4.6,
        imageUrl: "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }

  ];
  dbo.collection("products").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
  
    
}); 

// Retrieve
/*var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb",{ useNewUrlParser: true }, function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});*/