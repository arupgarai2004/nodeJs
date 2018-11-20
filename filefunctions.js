var fs = require('fs');


//sync 

var content=fs.readFileSync('myrenamedfile2.txt');
console.log(content.toString());    

//Asynchronous methods 
fs.readFile('myrenamedfile2.txt',function(err,content){
   if(err) {
       return console.log(err);
   }else{
       console.log("File data using Asynchronous methods :"+content.toString());
   }
});



fs.appendFile('mynewfile1.txt', 'append file data', function (err) { // append file data
  if (err) throw err;
  console.log('Updated!');
}); 

fs.open('mynewfile2.txt', 'w', function (err, file) { //Create a new, empty file using the open() method:
  if (err) throw err;
  console.log('Replaced');
});


//Create a new file using the writeFile() method:

fs.writeFile('mynewfile3.txt', 'Create a new file using the writeFile() method:', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


fs.unlink('mynewfile2.txt', function (err) { //delete a file using unlink
  if (err) throw err;
  console.log('File deleted!');
}); 


fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) { //rename a file 
  if (err) throw err;
  console.log('File Renamed!');
});


//stattic of files 
var path= 'documents';
fs.stat(path,function(err,stats){
    console.log(path);
    console.log();
    console.log(stats);
    console.log();
    
    if(stats.isFile()){
        console.log("  This is a File ");
    }
    if(stats.isDirectory()){
        console.log(' This is a directory');
    }
    console.log('  Size is '+ stats["size"]);
});