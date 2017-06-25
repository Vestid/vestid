angular.module('vestid').service('authService', function($http){

	this.loginUser = (user) => {
		return $http({
			url: '/api/login',
			method: 'POST',
			data: user
		}).then(res => {
			return res.data
		}).catch(error => {
			console.log("login Err: ", error)
			return error
		})
	}

	this.registerUser = (user) => {
		return $http({
			url: '/api/register',
			method: 'POST',
			data: user
		}).then(({data}) => {
			return data
		}).catch(err => {
			console.log("regUser ERR: ", err)
			return err
		})
	}

	this.currentUser = () => {
		return $http({
			url: '/success',
			method: 'GET'
		}).then(res => {
			return res
		}).catch(err => {
			console.log("currentUser Err: ", err)
			return err
		})
	}

});