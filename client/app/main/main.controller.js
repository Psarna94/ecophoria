'use strict';

angular.module('ecophoriaApp')
    .controller('MainController', function ($scope, $location, $anchorScroll, $state) {
        $scope.goToAllEvents = function(){
            $state.go('Allevents');
        }
    })
;


