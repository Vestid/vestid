angular.module('vestid').service('submitLoanService',
    ['$http', function ($http) {

        this.submitSeekingLoan = info => {
            return $http({
                url: '/api/add-seeking-loan',
                method: 'POST',
                data: info
            }).then(res => {
                return res
            }).catch(err => {
                console.log('err: ', err)
            })
        }

        this.submitOfferingLoan = info => {
            return $http({
                url: '/api/add-loan',
                method: 'POST',
                data: info
            }).then(res => {
                return res
            }).catch(err => console.log('err: ', err))
        }

    }])