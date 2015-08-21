var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

console.log()

var _idProcurado = new ObjectId('55d6729d4d286053174fff26');

MongoClient.connect('mongodb://127.0.0.1:27017/contatooh', 
	function(conError, db){
		if (conError)
			throw err;

		db.collection('contatos').findOne({_id: _idProcurado},
			function(colError, contato){
				if (colError)
					throw err;

				console.log(contato);
			})
	});