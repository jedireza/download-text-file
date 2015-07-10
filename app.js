var Express = require('express');
var Fs = require('fs');

var express = Express();

express.get('/', function (req, res) {

    res.setHeader('Content-disposition', 'attachment; filename=this-is.txt');
    Fs.createReadStream('./this-is.txt').pipe(res);
}); 


var port = process.env.PORT || 3000;
var server = express.listen(port, function () {

    var host = server.address().address;
    console.log('Serving at http://%s:%s', host, port);
});
