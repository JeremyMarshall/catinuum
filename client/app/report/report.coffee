'use strict'

angular.module 'catinuumApp'
.config ($stateProvider) ->
  $stateProvider.state 'report',
    url: '/report'
    templateUrl: 'app/report/report.html'
    controller: 'ReportCtrl'
