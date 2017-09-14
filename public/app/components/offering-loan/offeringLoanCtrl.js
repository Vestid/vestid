angular.module("vestid").controller("offeringLoanCtrl",
	['$scope', 'authService', 'prevState', '$state', ($scope, authService, prevState, $state) => {

	authService.currentUser().then(({data}) => {
		(data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		$scope.userId = res.data[0].id
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