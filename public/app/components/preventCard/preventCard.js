angular.module('vestid').directive('preventCard', () => {
    return {
      restrict: 'E',
      templateUrl: './app/components/preventCard/prevent-card.tmpl.html',
      scope: {
	      type: '@'
      }
    }
});