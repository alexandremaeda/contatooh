var app = angular.module('contatooh', [
	'ngRoute',
	'ngResource'
]);

app.config(function($routeProvider, $httpProvider, $locationProvider){
	$httpProvider.interceptors.push('InterceptorService');

	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	})
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
	});
});