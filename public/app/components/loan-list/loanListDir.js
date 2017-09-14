angular.module('vestid').directive('loanListDir', () => {
    return {
    	restrict: 'E',
      templateUrl: './app/components/loan-list/loan-list-tmpl.html',
	    controller: 'loanListCtrl'
    }
});