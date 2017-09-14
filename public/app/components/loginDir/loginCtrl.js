angular.module('vestid').controller('loginCtrl',
	[ '$scope', 'authService', '$state', ($scope, authService, $state) => {

	$scope.invalid = false

	$scope.login = (user) => {
		authService.loginUser(user).then(user => {

			const {data} = user
			if (data === "Unauthorized") {
				$scope.invalid = true;
				$scope.user.email = ''
				$scope.user.password = ''
			} else {
				$state.go('landing')
			}
		})
	}

}])