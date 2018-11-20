// Load the module
var to_json = require('xmljson').to_json;
 
// An XML string
var xml = '' +
    '<data>' +
        '<prop1>val1</prop1>' +
        '<prop2>val2</prop2>' +
        '<prop3>val3</prop3>' +
    '</data>';
 
to_json(xml, function (error, data) {
    // Module returns a JS object
    console.log(data);
    // -> { prop1: 'val1', prop2: 'val2', prop3: 'val3' }
 
    // Format as a JSON string
    console.log(JSON.stringify(data));
    // -> {"prop1":"val1","prop2":"val2","prop3":"val3"}
});