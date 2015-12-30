'use strict';

angular.module('ecophoriaApp.auth', [
  'ecophoriaApp.constants',
  'ecophoriaApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
