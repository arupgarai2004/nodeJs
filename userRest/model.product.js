const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productId: String,
	productName:	String,
	productCode:String,
	releaseDate:	String,
	description:	String,
	price:	String,
	starRating:	String,
	imageUrl:	String
}, {
    timestamps: true
});

var Prod=module.exports = mongoose.model('Product', ProductSchema);

//get productS
module.exports.getProducts=function(callback,limit){
	Prod.find({productId:{ $ne: null }},callback).limit(limit)
	//.skip((pageNumber-1) *pageSize)
	//.limit(pageSize)
	.sort({productId:1})
	.select({ productId:1,productName:1,productCode:1,releaseDate:1,description:1,price:1,starRating:1})
	;
	
}

//get a single product


module.exports.getaProductById=function(productId,callback){	 	 
	 	 Prod.find({productId:productId},callback)
		 .select({ productId:1,productName:1,productCode:1,releaseDate:1,description:1,price:1,starRating:1});
		
}

// add Product
module.exports.addProd=function(product,callback){
	Prod.create(product,callback);
}

//Update product
module.exports.updateProductById=function(productId,bodyData,callback){	 	 
	 	Prod.updateMany({productId:productId},{$set: bodyData},callback);
		
}



