var app = angular.module('contatooh', [
	'ngRoute',
	'ngResource'
]);

app.config(function($routeProvider){
	$routeProvider
	.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	}).when('/contato/:id', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	}).otherwise('/contatos');
});