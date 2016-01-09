'use strict';

angular.module('ecophoriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('participants', {
        url: '/participants',
        templateUrl: 'app/participants/participants.html',
        controller: 'ParticipantsCtrl',
        authenticate: true
      });
  });