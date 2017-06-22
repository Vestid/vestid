angular.module('vestid').directive('offeringLoanDir', () => {
    return {
      restrict: 'E',
	    templateUrl: './app/components/offering-loan/offering-loan-tmpl.html',
	    controller: 'offeringLoanCtrl'
    }
});