angular.module('vestid').service('authService',
	['$http', function($http){

	this.loginUser = (user) => {
		return $http({
			url: '/api/login',
			method: 'POST',
			data: user
		}).then(res => res)
			.catch(err => err)
	}

	this.registerUser = (user) => {
		return $http({
			url: '/api/register',
			method: 'POST',
			data: user
		}).then(data => data)
			.catch(err => err)
	}

	this.currentUser = () => {
		return $http({
			url: '/success',
			method: 'GET'
		}).then(res => res)
			.catch(err => err)
	}

}]);