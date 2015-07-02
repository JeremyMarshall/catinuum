'use strict'

angular.module 'catinuumApp'
.controller 'MainCtrl', ($scope, $http) ->
  $scope.awesomeThings = []

  $http.get('/api/things').success (awesomeThings) ->
    $scope.awesomeThings = awesomeThings

  $scope.treedata1 =
  [
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
  ];

  $scope.treedata2 =
    [
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
    ];

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



