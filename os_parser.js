/** @brief  Return IP Address, language, and operating system for the client's browser.
*           {"ipaddress":"67.182.190.65","language":"en-US","software":"Windows NT 10.0; WOW64"}    
*/

var express = require("express");
var app = express();

app.get('/api/whoami', function(req,res){
    var json = {};
    json.ipaddress = req.headers['x-forwarded-for'];
    json.language = req.headers['accept-language'].split(',')[0];
    
    var software = req.headers['user-agent'].split('(')[1].split(')');

    json.software = software[0];

    res.end(JSON.stringify(json));
});

console.log("Request Header Parser Microservice starting...")
app.listen(process.env.PORT || 8080) 
