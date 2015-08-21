angular.module('contatooh').controller('ContatosController', ContatosController);

function ContatosController($scope, ContatoService){
	$scope.total = 0;
	$scope.busca = '';
	$scope.contatos = [];
	$scope.erro = {
		mensagem: null
	};

	function buscaContatos(){
		ContatoService.query(
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
		ContatoService.delete({
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