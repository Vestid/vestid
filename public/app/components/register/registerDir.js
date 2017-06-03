angular.module('vestid').directive('registerDir', () => {
    return {
      restrict: 'E',
	    templateUrl: './app/components/register/register-tmpl.html',
	    controller: 'registerCtrl'
    }
});