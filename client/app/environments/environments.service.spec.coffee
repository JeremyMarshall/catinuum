'use strict'

describe 'Service: environments', ->

  # load the service's module
  beforeEach module 'catinuumApp'

  # instantiate service
  environments = undefined
  beforeEach inject (_environments_) ->
    environments = _environments_

  it 'should do something', ->
    expect(!!environments).toBe true
