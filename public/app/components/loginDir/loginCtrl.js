angular.module('vestid').controller('loginCtrl', ($scope, authService) => {

	$scope.login = (user) => {
		authService.loginUser(user).then(res => {
			console.log("LoginCtrl: ", res)
		})
	}

});