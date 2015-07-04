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
    environments.setCurr(e)

  $scope.envs = () ->
    return environments.getEnvs()

  $scope.currenv = () ->
    return environments.getCurr()


