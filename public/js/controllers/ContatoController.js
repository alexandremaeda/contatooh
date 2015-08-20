angular.module('contatooh').controller('ContatoController', ContatoController);

function ContatoController($scope, $routeParams){
	var id = $routeParams.id;
	alert(id);
}