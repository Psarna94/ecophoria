'use strict';

angular.module('ecophoriaApp')
    .controller('ParticipantsCtrl', function ($scope, $http) {
        $http.get('api/participants')
            .success(function (res) {
                console.log(res);
                $scope.participants = res;
            })
    });
