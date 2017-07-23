angular.module("vestid").controller("offeringLoanCtrl", ($scope, authService) => {

	authService.currentUser().then(({data}) => {
		(data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		$scope.userId = res.data[0].id
	})

	$scope.businessTypes = [
		{ type: 'Startup' },
		{ type: 'Tech' },
		{ type: 'Food' },
		{ type: 'Creative' },
		{ type: 'Retail' }
	];

});