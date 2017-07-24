angular.module('vestid').controller('seekingLoanCtrl', ($scope, authService, prevState, $state) => {

	authService.currentUser().then((res) => {
		(res.data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(res.data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		$scope.user = res.data[0]
	})

	const url = $state.href($state.current.name)
	prevState.parseState(url)


	$scope.loans = [
		{ price: 500 },
		{ price: 750 },
		{ price: 1000 },
		{ price: 1500 },
		{ price: 2000 }
	];

	$scope.businessTypes = [
		{ type: 'Startup' },
		{ type: 'Tech' },
		{ type: 'Food' },
		{ type: 'Creative' },
		{ type: 'Retail' }
	];

});