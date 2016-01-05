'use strict';



angular.module('ecophoriaApp')
  .controller('MainController', function($scope, $location, $anchorScroll){
        $scope.events = [
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            },
            {
                name:"Monopoly"
            }
        ];

        $scope.scrollToEvents = function(){
            $location.hash('events');

      // call $anchorScroll()
      $anchorScroll();
        }
    });


