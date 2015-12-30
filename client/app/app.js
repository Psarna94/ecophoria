'use strict';

angular.module('ecophoriaApp', [
    'ecophoriaApp.auth',
    'ecophoriaApp.admin',
    'ecophoriaApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'validation.match'
])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
