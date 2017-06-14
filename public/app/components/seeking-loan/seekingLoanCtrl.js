angular.module('vestid').controller('seekingLoanCtrl', ($scope) => {

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

	]

	$scope.slform = (slf) => {
		console.log(slf)
	}

});