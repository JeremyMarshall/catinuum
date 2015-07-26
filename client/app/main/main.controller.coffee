'use strict'

angular.module 'catinuumApp'
.controller 'MainCtrl', ($scope, environments, setHierarchy, setPairs) ->

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

  $scope.buildSource = (node) ->
    data = ''

    if node.data
      data = "#{data}\n#{node.id}"
      data = "#{data}\n#{k}\n#{v}" for k,v of node.data

    data = data + $scope.buildSource(c) for c in node.children

    return data

  $scope.treePairData = () ->
    return setPairs.getRaw()

  $scope.$watch 'treePair.currentNode', ((newObj, oldObj) ->
    if $scope.treePair and angular.isObject($scope.treePair.currentNode)
      $scope.source = $scope.buildSource(newObj)
    return
  ), false

  $scope.source = () ->
    return setPairs.getRaw()[0]

  #$scope.$watchCollection 'treePair.checkedNodes', ((newObj, oldObj) ->
  #  if $scope.treePair and angular.isObject($scope.treePair.checkedNodes)
  #    console.log '2 Node Checked!!'
  #    console.log $scope.treePair.checkedNodes
  #  return
  #)

  $scope.$on 'env:updated', (event, data) ->
    #$scope.treePair.checkedNodes = []
    $scope.treeHierarchy.checkedNodes = []
    $scope.left = ''
    return

  $scope.$on 'pairs:updated', (event) ->
    $scope.treePair.api.selectByLabel '/'
    console.log('here')
    return

  $scope.$on '$locationChangeStart', (event) ->
    $scope.treePair.api.selectByLabel '/'

