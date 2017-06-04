angular.module('vestid').directive('pwresetDir', () => {
    return {
      restrict: 'E',
	    templateUrl: './app/components/pwreset/pwreset-tmpl.html',
	    controller: 'pwresetCtrl'
    }
});