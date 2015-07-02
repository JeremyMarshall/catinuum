'use strict'

angular.module 'catinuumApp'
.controller 'NavbarCtrl', ($scope, $location) ->
  $scope.menu = [
    title: 'Home'
    link: '/'
  ,
    title: 'Report'
    link: '/report'
  ]
  $scope.isCollapsed = true

  $scope.isActive = (route) ->
    route is $location.path()
