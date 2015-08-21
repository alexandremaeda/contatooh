module.exports = function(app) {
	var Contato = app.models.contato;
	var controller = {};

	controller.listar = function(req, res) {
		Contato.find().exec()
			.then(
				function(contatos) {
					res.json(contatos);
				},
				function(error) {
					getError(res, error, 500);
				}
		);
	};

	controller.salvar = function(req, res) {
		var _id = req.body._id;

		if (_id) {
			Contato.findByIdAndUpdate(_id, req.body).exec()
				.then(
					function(contato) {
						res.json(contato);
					},
					function(error) {
						getError(res, error, 500);
					}
			);
		} else {
			Contato.create(req.body)
				.then(
					function(contato) {
						res.status(201).json(contato);
					},
					function(error) {
						getError(res, error, 500);
					}
			);
		}
	};

	controller.buscarPorId = function(req, res) {
		var _id = req.params.id;

		Contato.findById(_id).exec()
			.then(
				function(contato) {
					if (!contato)
						throw new Error("Contato não encontrado.");

					res.json(contato);
				},
				function(error) {
					getError(res, error, 404);
				}
		);
	};

	controller.excluir = function(req, res) {};

	function getError(res, error, status) {
		console.error(error);
		res.status(status).json(error);
	}

	function atualizar(contatoAlterado) {
		contatos = contatos.map(function(contato) {
			if (contato._id == contatoAlterado._id)
				contato = contatoAlterado;
			return contato;
		})

		return contatoAlterado;
	}

	function adicionar(contatoNovo) {
		contatoNovo._id = ID_CONTATO_INC++;
		contatos.push(contatoNovo);
		return contatoNovo;
	}

	return controller;
};