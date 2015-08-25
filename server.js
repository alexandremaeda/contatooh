var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://admin:admin**@ds035653.mongolab.com:35653/contatooh');

app.set('port', (process.env.PORT || 3001));

http.createServer(app).listen(app.get('port'), function(){
	console.log('Server online na porta ' + app.get('port'));
});