var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost/contatooh');

http.createServer(app).listen(process.env.port || 3000, function(){
	console.log('Server online na porta ' + app.get('port'));
});