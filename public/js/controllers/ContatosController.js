angular.module('contatooh').controller('ContatosController', ContatosController);

function ContatosController($scope, $resource){
	$scope.total = 0;
	$scope.busca = '';
	$scope.contatos = [];

	var rsContato = $resource('/contatos/:id')

	function buscaContatos(){
		rsContato.query(
			function(data){
				$scope.contatos = data;
			},
			function(error){
				console.log(error);
			}
		);
	}

	$scope.excluir = function(id){
		rsContato.delete({
			id: id
		}, buscaContatos
		, function(error){
			console.log(error);
		});
	};

	$scope.incrementa = function(){
		$scope.total++;
	}

	buscaContatos();
}