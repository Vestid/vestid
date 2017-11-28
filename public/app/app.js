angular.module('vestid', ['ui.router', 'chart.js'])
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
				url: '/password-reset',
				controller: 'pwresetCtrl'
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
			.state('all-loans', {
				templateUrl: './app/views/all-loans.html',
				url: '/all-loans',
				resolve: {
					loginCheck: ['authService','$state', (authService, $state) => {
						return authService.currentUser().then(user => {
							if(user.data === 'Unauthorized') {
								$state.go('landing')
							}
							return user.data
						})
					}]
				}
			})
			.state('loan-profile', {
				templateUrl: './app/views/loan-profile.html',
				url: '/loan-profile/details',
				controller: 'profileCtrl'
			})
	}])