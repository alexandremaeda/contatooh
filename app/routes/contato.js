function verificaAutenticacao(req, res, next){
	console.log('Verificando autenticação....');
	if (req.isAuthenticated())
		return next();
	else
		res.status('401').json('Não autorizado');
}

module.exports = function(app){
	var controller = app.controllers.contato;

	app.route('/contatos')
		.get(controller.listar)
		.post(controller.salvar);
	
	app.route('/contatos/:id')
		.get(controller.buscarPorId)
		.delete(controller.excluir);
};