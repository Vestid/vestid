angular.module('vestid').service('authService',
	['$http', function($http){

	this.loginUser = (user) => {
		return $http({
			url: '/api/login',
			method: 'POST',
			data: user
		}).then(res => {
			return res
		}).catch(error => {
			return error
		})
	}

	this.registerUser = (user) => {
		return $http({
			url: '/api/register',
			method: 'POST',
			data: user
		}).then(data => {
			return data
		}).catch(err => {
			return err
		})
	}

	this.currentUser = () => {
		return $http({
			url: '/success',
			method: 'GET'
		}).then(res => res)
			.catch(err => err)
	}

	this.resetPassword = (email) => {
	    return $http({
            url: '/api/reset',
            method: 'POST',
            data: { email }
        }).then(res => res)
            .catch(err => err)
    }

}]);