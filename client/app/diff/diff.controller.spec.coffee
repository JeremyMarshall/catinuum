'use strict'

describe 'Controller: DiffCtrl', ->

  # load the controller's module
  beforeEach module 'catinuumApp'
  DiffCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    DiffCtrl = $controller 'DiffCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
