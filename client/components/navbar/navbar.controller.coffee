'use strict'

angular.module 'catinuumApp'
.controller 'NavbarCtrl', ($scope, $location, environments) ->
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

  $scope.setenv = (e) ->
    $scope.currenv = e
    environments.setcurrenv(e)

  environments.getData().then (e) ->
    $scope.envs = e
    $scope.currenv = e[0]

