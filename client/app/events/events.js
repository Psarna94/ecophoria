'use strict';

angular.module('ecophoriaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('Allevents.events', {
                url:     '/events/:eventname',
                onEnter: ['$stateParams', '$state', '$modal', function ($stateParams, $state, $modal) {
                    $modal.open({
                        templateUrl: 'app/events/events.html',
                        controller:  'EventsCtrl'
                    }).result.finally(function () {
                            $state.go('^');
                        })

                }]

            });
    });