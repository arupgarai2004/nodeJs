const Joi = require('joi');
var express = require('express');
var app = express();
app.use(express.json());
 //var bodyPerser= require('body-perser');
 var mongoose =require('mongoose');
 mongoose.connect('mongodb://localhost:27017/user-products');
 var db= mongoose.connection;




ProductM= require('./model.product.js');

app.get('/',(req,res)=>{
	res.send('hello World');
});

/// Show all data

app.get('/products',(req,res)=>{
	ProductM.getProducts(function(err,products){
		if(err){
			throw err;
		}
		res.json(products);
	});
});

app.get('/products/:productId',(req,res)=>{
	//console.log(req.params.productId);
	//res.send(req.params.productId);
	ProductM.getaProductById(req.params.productId,function(err,product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});

app.put('/products/:productId',(req,res)=>{
	
		ProductM.updateProductById(req.params.productId,req.body,function(err,product){
				if(err){
					throw err;
				}
				res.json(product);
		});
	
		
	
});


app.post('/products',(req,res)=>{
	
	var prod=req.body;
	const schema= {
		productId:"",
		productName:Joi.string().min(3).required(),
		productCode:"",
		releaseDate:"",
	};
	/*const result= Joi.validate(req.body,schema);
	if(result.error){
		res.status(400).send(result.error.details[0].message);
		return;
	}*/
	ProductM.addProd(prod,function(err,product){
		if(err){
			throw err;
		}
		res.json(product);
	});
});




const port=process.env.PORT || 3030;
app.listen(port,()=> console.log(`Listening on port ${port}..`));