'use strict';

angular.module('ecophoriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Allevents', {
        url: '/Allevents',
        templateUrl: 'app/Allevents/Allevents.html',
        controller: 'AlleventsCtrl'
      });
  });