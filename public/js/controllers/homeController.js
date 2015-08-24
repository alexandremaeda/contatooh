angular.module('contatooh').controller('HomeController', HomeController);

function HomeController($rootScope) {
    var vm = this;

    $rootScope.$on('$routeChangeSuccess', function(e, current, pre){
        if (current.$$route.originalPath == '/'){
            vm.url = 'https://alexandremaeda.herokuapp.com/#/';
            vm.title = 'Home';
            vm.discription = 'Página principal';
        }
        else if(current.$$route.originalPath == '/contato'){
            vm.url = 'https://alexandremaeda.herokuapp.com/#/contato';
            vm.title = 'Contato';
            vm.discription = 'Página Contato';
        }
    });

    
}