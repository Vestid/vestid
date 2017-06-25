angular.module('vestid').controller('loginCtrl', ($scope, authService, $state) => {
	$scope.invalid = false;

	$scope.login = (user) => {
		authService.loginUser(user).then(user => {
			let {data} = user
			if (data === "Unauthorized") {
				$scope.invalid = true;
				$scope.user = ''
			} else {
				let {firstname} = user[0]
				$state.go('landing', {id: firstname})	
			}
		})
	}
})