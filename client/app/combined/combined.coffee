'use strict'

angular.module 'catinuumApp'
.config ($stateProvider) ->
  $stateProvider.state 'combined',
    url: '/'
    views:
      'main':
        templateUrl: 'app/combined/combined.html'
        controller: 'CombinedCtrl'

      'diff@combined':
        templateUrl: 'app/combined/diff.html'

      'src@combined':
        templateUrl: 'app/combined/src.html'

