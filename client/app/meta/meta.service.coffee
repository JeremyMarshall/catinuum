'use strict'

angular.module 'catinuumApp'
.service 'meta', ->
  new class Meta
    constructor: ->
      @separator = '::'

      @labels = {
        key: 'KEY',
        pair: 'N-PLE',
        all: 'ALL',
        set: 'sets',
        types: 'types'
      }

      @_compound = {}

      @field = {
        src: {member: 0},
        file: {key: 2, pair: 3},
        directory: {key: 2, pair: 2, set: 'DIR'},
        aux: {member: 2},
        cmt: {member: 1},
        environment: {key: 1, set: 'ENV'},
        ext: {member: 3, set: 'EXT'},
        module: {pair: 1, set: 'MOD'},
        del: {member: 4}
      }

    all_sets: ->
      return "#{@labels.all}#{@separator}#{@labels.set}"

    sets: (set) ->
      return "#{set}#{@separator}#{@labels.set}"

    match: (what) ->
      if !@_compound[what]
        @_compound[what] = []
        for k of @fields
          if @fields[k][what]
            @_compound[what][@fields[k][what]] = k
      return @_compound[what]

    match_str: (what) ->
      if !@_compound[what]
        @_compound[what] = {}
        for k of @fields
          if @fields[k][what]
            @_compound[what][k] = @fields[k][what]
      return @_compound[what]

