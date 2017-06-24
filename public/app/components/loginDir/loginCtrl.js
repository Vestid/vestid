angular.module('vestid').controller('loginCtrl', ($scope, authService, $state) => {

	$scope.login = (user) => {
		authService.loginUser(user).then(({data}) => {
			if(data === "Unauthorized"){
			}
			$state.go('landing')
		})
	}

});