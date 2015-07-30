'use strict'

describe 'Controller: LoadCtrl', ->

  # load the controller's module
  beforeEach module 'catinuumApp'
  LoadCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    LoadCtrl = $controller 'LoadCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
