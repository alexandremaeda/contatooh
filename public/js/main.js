var app = angular.module('contatooh', [
	'ngRoute',
	'ngResource'
]);

app.config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push('InterceptorService');

	$routeProvider
	.when('/auth', {
		templateUrl: 'partials/auth.html',
		controller: 'ContatosController'
	})
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