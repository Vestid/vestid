angular.module('vestid').directive('navbarDir', () => {
    return {
      restrict: 'E',
	    templateUrl: './app/components/navbar/navbar-tmpl.html',
	    controller: ['$scope', 'authService', ($scope, authService) => {
		    authService.currentUser().then(user => {
				    if(user.data === 'Unauthorized') {
					    $scope.keepLogin = true
				    } else {
			    	  $scope.removeUser = true;
			    	  $scope.user = user.data.firstname
				    }
		    })

	    }]
    }
});