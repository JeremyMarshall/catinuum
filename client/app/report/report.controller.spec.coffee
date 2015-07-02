'use strict'

describe 'Controller: ReportCtrl', ->

  # load the controller's module
  beforeEach module 'catinuumApp'
  ReportCtrl = undefined
  scope = undefined

  # Initialize the controller and a mock scope
  beforeEach inject ($controller, $rootScope) ->
    scope = $rootScope.$new()
    ReportCtrl = $controller 'ReportCtrl',
      $scope: scope

  it 'should ...', ->
    expect(1).toEqual 1
