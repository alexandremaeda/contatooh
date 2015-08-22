var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://alexandremaeda:tornado6555@ds035653.mongolab.com:35653/contatooh');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Server online na porta ' + app.get('port'));
});