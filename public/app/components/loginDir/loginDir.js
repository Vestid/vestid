angular.module('vestid')
    .directive('loginDir', () => {
      return {
        restrict: 'E',
        templateUrl: './app/components/loginDir/login-tmpl.html',
        controller: 'loginCtrl'
      }
});