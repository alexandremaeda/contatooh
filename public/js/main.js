var app = angular.module('contatooh', [
	'ngRoute',
	'ngResource'
]);

app.config(function($routeProvider){
	$routeProvider
	.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	}).when('/contato', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	}).when('/contato/:id', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatoController'
	}).otherwise('/contatos');
});

for (var i = params.length - 1; i >= 0; i--) {
	var route = '/a/b/:id';

	route.indexOf(params[i]) 
};