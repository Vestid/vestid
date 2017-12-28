angular.module('vestid').service('submitLoanService',
    ['$http', function ($http) {
        this.submitSeekingLoan = info => {
            console.log('submitting: ', info);
            console.log('type: ', typeof info);
            return $http({
                url: '/api/add-seeking-loan',
                method: 'POST',
                data: info
            }).then(res => (res))
                .catch(err => (err))
        }
    }])