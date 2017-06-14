angular.module("vestid").controller("offeringLoanCtrl", ($scope) => {
	$scope.businessTypes = [
		{ type: 'Startup' },
		{ type: 'Tech' },
		{ type: 'Food' },
		{ type: 'Creative' },
		{ type: 'Retail' }
	];

});