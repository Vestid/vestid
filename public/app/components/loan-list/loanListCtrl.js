angular.module('vestid').controller('loanListCtrl',
	["$scope",($scope) => {

	$scope.toggleFav = (id) =>  {
		$scope.loans.find(loan => {
			if(loan.id === id){
				return loan.favorited = !loan.favorited
			}

		})
	}

	$scope.loans = [
		{id: 1, type: 'Plumbing', name: "Ralph's Plumbing", loanAmount: 3400, favorited: true},
		{id: 2, type: 'Start-up', name: "Vestid", loanAmount: 3656, favorited: false},
		{id: 3, type: 'IT Help', name: "iFix", loanAmount: 3400, favorited: false},
		{id: 4, type: 'Fashion', name: "Fashionist", loanAmount: 150, favorited: false},
		{id: 5, type: 'Data Recovery', name: "Save HD", loanAmount: 3005, favorited: true},
		{id: 6, type: 'Customer Service', name: "PhoneMe", loanAmount: 1050, favorited: true},
		{id: 7, type: 'B2B', name: "Janiis", loanAmount: 5001, favorited: false},
		{id: 8, type: 'Bag Manufacture', name: "Ogio", loanAmount: 2222, favorited: false},
		]

}]);