angular.module('vestid').service('emailService',
    ['$http', function ($http) {

    this.requestPWReset = user => {
        return $http({
            url: '/api/request-password-reset',
            method: 'POST',
            data: user
        }).then(data => console.log(data))
            .catch(err => console.log('err', err));
    }
    }])