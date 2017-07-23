angular.module('vestid').controller('seekingLoanCtrl', ($scope, authService) => {

	authService.currentUser().then(({data}) => {
		(data === 'Unauthorized') ? $scope.authorized = false : $scope.authorized = true;
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