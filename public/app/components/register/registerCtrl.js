angular.module('vestid').controller('registerCtrl', ($scope, authService) => {

	$scope.matchDefault = false;
		
	$scope.register = (user) => {
		if(user.password !== user.passwordtwo){
			$scope.matchDefault = true
			$scope.user.password = ''
			$scope.user.passwordtwo = ''
		} else {
			authService.registerUser(user).then(res => {
				console.log("regCtrl: ", res)
			})
		}
	}
	
});