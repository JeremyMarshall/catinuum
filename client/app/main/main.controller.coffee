'use strict'

angular.module 'catinuumApp'
.controller 'MainCtrl', ($scope, environments, setHierarchy, setPairs) ->

  $scope.aaa =  [
    { "label" : "User", "id" : "role1", "children" : [
      { "label" : "subUser1", "id" : "role11", "children" : [] },
      { "label" : "subUser2", "id" : "role12", "children" : [
        { "label" : "subUser2-1", "id" : "role121", "children" : [
          { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
          { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
        ]}
      ]}
    ]},
    { "label" : "Admin", "id" : "role2", "children" : [] },
    { "label" : "Guest", "id" : "role3", "children" : [] }
  ]

  $scope.bbb = [
    { "label" : "User", "id" : "role1", "children" : [
      { "label" : "subUser1", "id" : "role11", "children" : [] },
      { "label" : "subUser2", "id" : "role12", "children" : [
        { "label" : "subUser2-1", "id" : "role121", "children" : [
          { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
          { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
        ]}
      ]}
    ]},
    { "label" : "Admin", "id" : "role2", "children" : [] },
    { "label" : "Guest", "id" : "role3", "children" : [] },
    { "label" : "User", "id" : "role4", "children" : [
      { "label" : "subUser4", "id" : "role41", "children" : [] },
      { "label" : "subUser4", "id" : "role42", "children" : [
        { "label" : "subUser2-4", "id" : "role421", "children" : [
          { "label" : "subUser2-1-1", "id" : "role1211", "children" : [] },
          { "label" : "subUser2-1-2", "id" : "role1212", "children" : [] }
        ]}
      ]}
    ]},
    { "label" : "Admin", "id" : "role2", "children" : [] },
    { "label" : "Guest", "id" : "role3", "children" : [] }
  ]

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

