angular.module('vestid').service('emailService',
    ['$http', function ($http) {

    this.requestPWReset = (email) => {
        return $http({
            url: '/api/reset',
            method: 'POST',
            data: { email}
        }).then(data => data)
            .catch(err => console.log('err', err));
    }
    }])