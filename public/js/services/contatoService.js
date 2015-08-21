angular.module('contatooh').factory('ContatoService', ContatoService);

function ContatoService($resource){
	return $resource('/contatos/:id');
}