'use strict';

angular.module('ecophoriaApp')
    .controller('RegisterCtrl', function ($scope, $http) {

        $scope.submitInfo = function (participant) {
            $http.post('/api/participants', participant)
                .success(function (res) {
                    console.log(res);
                })
                .error(function (res) {
                    console.log(res);
                })
        }
    });
