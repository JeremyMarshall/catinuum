'use strict'

describe 'Service: setPairs', ->

  # load the service's module
  beforeEach module 'catinuumApp'

  # instantiate service
  setPairs = undefined
  beforeEach inject (_setPairs_) ->
    setPairs = _setPairs_

  it 'should do something', ->
    expect(!!setPairs).toBe true
