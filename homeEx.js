
var express=require('express');
var app=express();

app.get('/', function (req, res) {
  res.send('GET request to the homepage')
});

// POST method route
app.post('/', function (req, res) {
	res.send(req.params);
  res.send('POST request to the homepage')
});

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
});


app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
});

app.listen(3000,function(){
    console.log("listing on port 3000");
});