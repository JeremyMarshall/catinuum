'use strict'

angular.module 'catinuumApp'
.config ($stateProvider) ->
  $stateProvider.state 'load',
    url: '/load'
    views:
      'main':
        templateUrl: 'app/load/load.html'
        controller: 'LoadCtrl'
