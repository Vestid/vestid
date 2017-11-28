angular.module('vestid').controller('pwresetCtrl',
    ['$scope', 'emailService', ($scope, emailService) => {

    $scope.passwordReset = userEmail => {
        emailService.requestPWReset(userEmail).then(res => {
            console.log('pw reset res: ', res);
        })
    }
}]);