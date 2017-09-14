angular.module('vestid').controller('registerCtrl',
	['$scope', 'authService', '$state',($scope, authService, $state) => {

	$scope.matchDefault = false;
		
	$scope.register = (user) => {
		if(user.password !== user.passwordtwo){
			$scope.matchDefault = true
			$scope.user.password = ''
			$scope.user.passwordtwo = ''
		} else {
			authService.registerUser(user).then(res => {
				if(res.status === 409){
					console.log("user exists")
				} else if(res.status === 200){
					$state.go('login')
				}
			})
		}
	}
}]);