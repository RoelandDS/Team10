var app = angular.module('hackthefuture', ['ui.router','ui.bootstrap']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider,$urlRouterProvider){
        $stateProvider.state('lamp', {
            url: '/lamp',
            templateUrl: '/kleur.html',
            controller: 'hueController'
        }).state('register', {
            url: '/register',
            templateUrl: '/register.html',
            controller: 'hueController'
        });

        $urlRouterProvider.otherwise('registreerController');    
    }]);







