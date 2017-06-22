angular.module('vestid').service('authService', function($http){

	this.loginUser = (user) => {
		return $http({
			url: '/api/login',
			method: 'POST',
			data: user
		}).then(res => {
			console.log("AuthService: ", res)
		})
	}

	this.registerUser = (user) => {
		return $http({
			url: '/api/register',
			method: 'POST',
			data: user
		}).then(res => {
			console.log('reguserService: ', res)
		})
	}

});