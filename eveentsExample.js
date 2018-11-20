var eventEmiter=require('events');

var emitMessages=function(){
    var msgEmitter=new eventEmiter();
    setTimeout( function(){
        msgEmitter.emit('begin');
        msgEmitter.emit('merge','node');
        msgEmitter.emit('merge','node');
        msgEmitter.emit('merge','expr');
        msgEmitter.emit('end','2');
        
    }, 5000);
    return msgEmitter;
  };


var results=emitMessages();
console.log("Program Starts.. ");
results.on('begin',function(){
    console.log("Begin");
    
});
results.on('merge',function(msg)
{
    console.log("Received:"+msg);
    
});
results.on('end',function(num)
{
    console.log("Received:"+num);
    console.log("Programs End Here ....");
});
