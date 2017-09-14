angular.module('vestid').controller('landingCtrl',
	['$scope', '$stateParams',($scope, $stateParams) => {

	$scope.user = $stateParams.id
	if (!$scope.user) {
		$scope.keepLogin = !$scope.keepLogin
	} else {
		$scope.removeUser = !$scope.removeUser
		$scope.user = $stateParams.id
	}
	

}])