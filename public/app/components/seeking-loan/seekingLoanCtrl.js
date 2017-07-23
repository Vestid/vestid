angular.module('vestid').controller('seekingLoanCtrl', ($scope, authService) => {

	authService.currentUser().then((res) => {
		(res.data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
		(res.data === 'Unauthorized') ? $scope.unauthorized = true : $scope.unauthorized = false;
		$scope.userId = res.data[0].id
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

});