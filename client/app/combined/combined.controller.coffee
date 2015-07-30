'use strict'

angular.module 'catinuumApp'
.controller 'CombinedCtrl', ($scope, $http, environments, setHierarchy, setPairs, $timeout) ->
  $scope.treeHierarchyData = () ->
    return setHierarchy.getRaw()

  #$scope.$watch 'treeHierarchy.currentNode', ((newObj, oldObj) ->
  #  if $scope.treeHierarchy and angular.isObject($scope.treeHierarchy.currentNode)
  #    console.log '1 Node Selected!!'
  #    #console.log $scope.treeHierarchy.currentNode
  #  return
  #), false

  $scope.$watchCollection 'treeHierarchy.checkedNodes', ((newObj, oldObj) ->
    if $scope.treeHierarchy and angular.isObject($scope.treeHierarchy.checkedNodes)
      setPairs.getFilteredData($scope.treeHierarchy.checkedNodes)
      $scope.source = ''

    return
  )

  $scope.displaytype="1"

  $scope.buildSource = (node) ->
    data = ''

    if node.data
      data = "#{data}\n#{node.id}"
      data = "#{data}\n#{k}\n#{v}" for k,v of node.data
    data = data + $scope.buildSource(c) for c in node.children
    return data

  $scope.treePairData = () ->
    return setPairs.getRaw()

  #$scope.$watch 'treePair.currentNode', ((newObj, oldObj) ->
  #  if $scope.treePair and angular.isObject($scope.treePair.currentNode)
  #  return
  #), false

  $scope.build_string = (node, env) ->

    data = ''

    if node.data and env == node.label
      data = "#{data}\n#{node.id}"
      data = "#{data}\n#{k}\n#{v}" for k,v of node.data
    data = data + $scope.build_string(c, env) for c in node.children

    return data

  $scope.$watch 'treePair.currentNode', ((newObj, oldObj) ->
    if $scope.treePair and angular.isObject($scope.treePair.currentNode)
      $scope.left = $scope.build_string(newObj, $scope.baseline())
      $scope.right = $scope.build_string(newObj, $scope.delta())
      $scope.source = $scope.buildSource(newObj)
    return
  ), false
  #$scope.$watchCollection 'treePair.checkedNodes', ((newObj, oldObj) ->
  #  if $scope.treePair and angular.isObject($scope.treePair.checkedNodes)
  #    console.log '2 Node Checked!!'
  #    console.log $scope.treePair.checkedNodes
  #  return
  #)

  $scope.source = () ->
    return setPairs.getRaw()[0]

  $scope.$on 'env:updated', (event, data) ->
    console.log('up')
    #$scope.treePair.checkedNodes = []
    $scope.treeHierarchy.checkedNodes = []
    #$scope.left = ''
    #$scope.right = ''

    return

  $scope.envs = () ->
    return environments.getEnvs1()

  $scope.baseline = () ->
    return environments.getBaseline()

  $scope.delta = () ->
    return environments.getDelta()

  $scope.setdelta = (e) ->
    environments.setDelta(e)
    $scope.right = $scope.build_string($scope.treePair.currentNode, e)

  $scope.setbaseline = (e) ->
    environments.setBaseline(e)
    $scope.left = $scope.build_string($scope.treePair.currentNode, e)


  $scope.$on 'pairs:updated', (event) ->
    $scope.treePair.api.selectByLabel '/'
    #return

  #$scope.$on '$viewContentLoaded', (event, toState, toParams, fromState, fromParams) ->
    #console.log('here2')
    #$scope.treePair.api.selectByLabel '/'
