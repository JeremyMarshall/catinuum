'use strict'

describe 'Controller: CombinedCtrl', ->

  # load the controller's module
  beforeEach module 'catinuumApp'
  CombinedCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    CombinedCtrl = $controller 'CombinedCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
