angular.module('contatooh').controller('ContatosController', ContatosController);

function ContatosController($scope, $resource){
	$scope.total = 0;
	$scope.busca = '';
	$scope.contatos = [];
	$scope.erro = {
		mensagem: null
	};

	var rsContato = $resource('/contatos/:id')

	function buscaContatos(){
		rsContato.query(
			function(data){
				$scope.contatos = data;
			},
			function(erro){
				console.log(erro);
				$scope.erro.mensagem = 'Não possível obter os Contatos.';
			}
		);
	}

	$scope.excluir = function(contato){
		rsContato.delete({
			id: contato._id
		}, buscaContatos
		, function(erro){
			console.log(erro);
			$scope.erro.mensagem = 'Não possível excluir ' + contato.nome + '.';
		});
	};

	$scope.incrementa = function(){
		$scope.total++;
	}

	buscaContatos();
}