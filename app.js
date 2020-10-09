var express = require('express');
var moment = require('moment');

var app = express();

var log=function(message){
var time=moment().format()
console.log('[Server] @'+time+' '+message)
}

app.use(express.static(__dirname + '/public'));

var port = 3000;
app.listen(port);
log('Server running on ' + port);
