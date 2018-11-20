var express=require('express');
var app=express();
app.get('/',function(request,response){
    response.send('Helllo world')
    
} );

app.listen(3000,function(){
    console.log("listing on port 3000");
});