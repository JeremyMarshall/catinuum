'use strict'

describe 'Service: setHierarchy', ->

  # load the service's module
  beforeEach module 'catinuumApp'

  # instantiate service
  setHierarchy = undefined
  beforeEach inject (_setHierarchy_) ->
    setHierarchy = _setHierarchy_

  it 'should do something', ->
    expect(!!setHierarchy).toBe true
