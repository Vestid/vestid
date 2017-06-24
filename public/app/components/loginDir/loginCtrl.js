angular.module('vestid').controller('loginCtrl', ($scope, authService, $state) => {

	$scope.login = (user) => {
		authService.loginUser(user).then(({data}) => {
			if(!data){
				alert('user not found')
			}
			$state.go('landing')
		})
	}

});