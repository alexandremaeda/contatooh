var contatos = [
	{
		_id: 1,
		nome: 'Contato 01',
		email: 'contato01@email.com'
	},
	{
		_id: 2,
		nome: 'Contato 02',
		email: 'contato02@email.com'
	},
	{
		_id: 3,
		nome: 'Contato 03',
		email: 'contato03@email.com'
	},
	{
		_id: 4,
		nome: 'Contato 04',
		email: 'contato04@email.com'
	},
	{
		_id: 5,
		nome: 'Contato 05',
		email: 'contato05@email.com'
	}
];

module.exports = function(){
	var controller = {};
	
	controller.lista = function(req, res){
		res.json(contatos);
	};

	controller.porId = function(req, res){
		var id = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == id;
		})[0];
		contato 
			? res.json(contato)
			: res.status(404).send('Contato não encontrado.');
	};

	controller.excluir = function(req, res){
		var id = req.params.id;
		contatos = contatos.filter(function(contato){
			return contato._id != id;
		});

		res.status(204).end();
	};

	return controller;
};