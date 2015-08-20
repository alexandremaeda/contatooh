module.exports = function(app){
	var controller = app.controllers.contato;
	
	app.route('/contatos')
		.get(controller.lista);
	
	app.route('/contatos/:id')
		.get(controller.porId)
		.delete(controller.excluir);
};