'use strict'

describe 'Service: meta', ->

  # load the service's module
  beforeEach module 'catinuumApp'

  # instantiate service
  meta = undefined
  beforeEach inject (_meta_) ->
    meta = _meta_

  it 'should do something', ->
    expect(!!meta).toBe true
