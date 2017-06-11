angular.module('vestid').directive('seekingLoanDir', () => {
    return {
      restrict: 'E',
	    templateUrl: './app/components/seeking-loan/seeking-loan-tmpl.html',
	    controller: 'seekingLoanCtrl'
    }
});