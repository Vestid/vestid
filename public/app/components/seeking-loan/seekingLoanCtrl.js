angular.module('vestid').controller('seekingLoanCtrl',
	['$scope', 'authService', 'prevState', '$state', ($scope, authService, prevState, $state) => {

	authService.currentUser().then(user => {
		if(user.data === 'Unauthorized') {
			$scope.unauthorized = true
		} else {
			$scope.authorize = true;
			$scope.user = user.data.firstname;
		}
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

}]);