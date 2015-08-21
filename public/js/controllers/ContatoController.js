angular.module('contatooh').controller('ContatoController', ContatoController);

function ContatoController($scope, $routeParams, ContatoService) {
	$scope.contato = new ContatoService();

	$scope.salvar = function() {
		$scope.contato.$save()
			.then(function() {
				$scope.mensagem = "Contato salvo com sucesso.";
				$scope.contato = new ContatoService();
			})
			.catch(function(erro) {
				console.log(erro);
				$scope.mensagem = "Não foi possível salvar o Contato.";
			});
	};

	ContatoService.query(function(contatos){
		$scope.contatos = contatos;
	});

	function buscaContato() {

		var id = $routeParams.id;

		ContatoService.get({
				id: id
			},
			function(contato) {
				$scope.contato = contato;
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não possível obter o Contato.';
			}
		);
	}

	if ($routeParams.id)
		buscaContato();
}