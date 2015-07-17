'use strict'

angular.module 'catinuumApp'
.controller 'MainCtrl', ($scope, environments, setHierarchy, setPairs) ->

  $scope.treeHierarchyData = () ->
    return setHierarchy.getRaw()

  $scope.$watch 'treeHierarchy.currentNode', ((newObj, oldObj) ->
    if $scope.treeHierarchy and angular.isObject($scope.treeHierarchy.currentNode)
      console.log '1 Node Selected!!'
      console.log $scope.treeHierarchy.currentNode
    return
  ), false

  $scope.treePairData = () ->
    return setPairs.getRaw()

  $scope.$watch 'treePair.currentNode', ((newObj, oldObj) ->
    if $scope.treePair and angular.isObject($scope.treePair.currentNode)
      console.log '2 Node Selected!!'
      console.log $scope.treePair.currentNode
    return
  ), false

  $scope.left = ["I am the very model of a modern Major-General,",
                 "I've information vegetable, animal, and mineral,",
                 "I know the kings of England, and I quote the fights historical,",
                 "From Marathon to Waterloo, in order categorical."
  ].join('\n');

  $scope.right = ["I am the very model of a cartoon individual,",
                  "My animation's comical, unusual, and whimsical,",
                  "I know the kings of England, and I quote the fights historical,",
                  "From wicked puns and stupid jokes to anvils that drop on your head."
  ].join('\n');


