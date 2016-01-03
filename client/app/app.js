'use strict';

angular.module('ecophoriaApp', [
    'ecophoriaApp.auth',
    'ecophoriaApp.admin',
    'ecophoriaApp.constants',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',

    'validation.match'
])
    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    });
