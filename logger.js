//console.log(__filename);
//console.log(__dirname);
const EventEmmiter=require('events');
//const emitter= new EventEmmiter();

var url='http://mylogger.io/log';

class Logger extends EventEmmiter{

	 log(message) {	
		console.log(message);
		//riased event
		this.emit('messagedLogged',{id:1,url:'http://'});

	}

}


module.exports=Logger;
//module.exports.endpoint=url;