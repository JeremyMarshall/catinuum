'use strict'

angular.module 'catinuumApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'angularTreeview',
  'diff-match-patch',
  'hljs']
.config ($stateProvider, $urlRouterProvider, $locationProvider, hljsServiceProvider) ->
  $urlRouterProvider
  .otherwise '/'

  $locationProvider.html5Mode true

  hljsServiceProvider.setOptions tabReplace: '    '


