'use strict'

angular.module 'catinuumApp'
.config ($stateProvider) ->
  $stateProvider.state 'diff',
    url: '/diff'
    templateUrl: 'app/diff/diff.html'
    controller: 'DiffCtrl'
