angular.module('vestid').controller('seekingLoanCtrl',
	['$scope', 'authService', 'prevState', '$state', 'submitLoanService', ($scope, authService, prevState, $state, submitLoanService) => {

	const url = $state.href($state.current.name)
	prevState.parseState(url)

	authService.currentUser().then(user => {
		(user.data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(user.data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		($scope.authorized) ? $scope.user = user.data.firstname : $scope.user = null;
	})

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

	$scope.slform = info => {
	    console.log('info: ', info)
        submitLoanService.submitSeekingLoan(info).then(res => {
            console.log('seeking loan form res: ', res)
        })
	}
}]);