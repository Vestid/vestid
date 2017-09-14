angular.module('vestid').controller('loanListCtrl',
	["$scope",($scope) => {


	$scope.loans = [
		{id: 1, type: 'Plumbing', name: "Ralph's Plumbing", loanAmount: 3400},
		{id: 2, type: 'Start-up', name: "Vestid", loanAmount: 1350}
		]

}]);