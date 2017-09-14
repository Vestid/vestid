angular.module('vestid', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

		$urlRouterProvider.otherwise('/')

		$stateProvider
			.state('landing', {
				templateUrl: './app/views/landing.html',
				url: '/?user/:id',
				controller: 'landingCtrl'
			})
			.state('login', {
				templateUrl: './app/views/login.html',
				url: '/login'
			})
			.state('register', {
				templateUrl: './app/views/register.html',
				url: '/register'
			})
			.state('password-reset', {
				templateUrl: './app/views/password-reset.html',
				url: '/password-reset'
			})
			.state('seeking-loan', {
				templateUrl: './app/views/seeking-loan.html',
				url: '/seeking-loan',
				controller: 'seekingLoanCtrl'
			})
			.state('offering-loan', {
				templateUrl: './app/views/offering-loan.html',
				url: '/offering-loan'
			})
	}])