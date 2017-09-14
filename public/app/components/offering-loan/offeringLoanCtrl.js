angular.module("vestid").controller("offeringLoanCtrl",
	['$scope', 'authService', 'prevState', '$state', ($scope, authService, prevState, $state) => {

	authService.currentUser().then(user => {
		(user.data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(user.data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		($scope.authorized) ? $scope.user = user.data.firstname : $scope.user = null;
	})

	const url = $state.href($state.current.name)
	prevState.parseState(url)

	$scope.businessTypes = [
		{ type: 'Startup' },
		{ type: 'Tech' },
		{ type: 'Food' },
		{ type: 'Creative' },
		{ type: 'Retail' }
	];

}]);