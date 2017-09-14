angular.module('vestid').controller('loginCtrl',[ '$scope', 'authService', '$state', 'prevState', ($scope, authService, $state, prevState) => {
	$scope.invalid = false;

	$scope.login = (user) => {
		authService.loginUser(user).then(user => {
			let {data} = user

			if (data === "Unauthorized") {
				$scope.invalid = true;
				$scope.user.email = ''
				$scope.user.password = ''
			} else {
				let { firstname } = user[0]
				$state.go(prevState.newUrl[0], {id: firstname})
			}
		})
	}

}])