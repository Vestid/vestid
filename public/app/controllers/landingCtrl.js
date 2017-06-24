angular.module('vestid').controller('landingCtrl', ($scope, user) => {
	console.log("landingCtrl: ",user)
	$scope.user = user;

});