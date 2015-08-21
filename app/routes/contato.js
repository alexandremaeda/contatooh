function verificaAutenticacao(req, res, next){
	console.log('entrou');
	if (req.isAuthenticated())
		return next();
	else
		res.status('401').json('Não autorizado');
}

module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(verificaAutenticacao, controller.listar)
		.post(verificaAutenticacao, controller.salvar);
	
	app.route('/contatos/:id')
		.get(verificaAutenticacao, controller.buscarPorId)
		.delete(verificaAutenticacao, controller.excluir);
};