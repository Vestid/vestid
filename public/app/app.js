angular.module('vestid', ['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('landing', {
                templateUrl: './app/views/landing.html',
                url:'/'
            })
            .state('login', {
                templateUrl: './app/views/login.html',
                url: '/login'
            })
    });