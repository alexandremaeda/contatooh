angular.module('contatooh').controller('ContatoController', ContatoController);

function ContatoController($scope, $routeParams, $resource){
	var rsContato = $resource('/contatos/:id');

	$scope.contato = new rsContato();

	$scope.salvar = function(){
		$scope.contato.$save()
			.then(function(){
				$scope.mensagem = "Contato salvo com sucesso.";
				$scope.contato = new rsContato();
			})
			.catch(function(erro){
				console.log(erro);
				$scope.mensagem = "Não foi possível salvar o Contato.";
			});
	};

	function buscaContato(){

		var id = $routeParams.id;

		rsContato.get(
			{id: id}, 
			function(contato){
				$scope.contato = contato;
			}, function(erro){
				console.log(erro);
				$scope.mensagem = 'Não possível obter o Contato.';
			}
		);
	}

	if ($routeParams.id)
		buscaContato();
}