'use strict'

angular.module 'catinuumApp'
.controller 'MainCtrl', ($scope, environments, setHierarchy, setPairs) ->

  $scope.treedata1 = () ->
    return setHierarchy.getRaw()

  $scope.treedata2 = () ->
    return setPairs.getRaw()

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

  $scope.xxx = () ->
    return environments.getCurr()

  $scope.yyy = () ->
    $scope.aaa = []

