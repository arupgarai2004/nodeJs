
/// create node webclient 
var http = require('http');
var options = {
    host: 'localhost',
    port: '9000'
};
var str = "";
var req = http.get(options, function (response) {
    response.on('data', function (chunk) {
        str += chunk;

    });

    response.on('end', function () {
        console.log("content:" + str);
    });

    response.on('error', function (msg) {
        console.log("Error:" + msg);
    });
});