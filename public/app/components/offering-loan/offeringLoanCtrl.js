angular.module("vestid").controller("offeringLoanCtrl",
	['$scope', 'authService', 'prevState', '$state', 'submitLoanService', ($scope, authService, prevState, $state, submitLoanService) => {

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
		{ type: 'Retail' },
        { type: 'Other' }
	];
	
	$scope.oflform = (info) => {
        submitLoanService.submitOfferingLoan(info).then(res => {
        	console.log('res: ', res.status)
		})
	}
}]);