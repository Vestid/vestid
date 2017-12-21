angular.module('vestid').controller('pwresetCtrl', ['$scope', 'authService', ($scope, authService) => {

    $scope.resetPW = email => {
        console.log('email: ', email)
        authService.resetPassword(email).then(res => {
            console.log('sendgrid res: ', res);
        })
    }
}]);