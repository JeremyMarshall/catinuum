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
        types: 'types',
        default: 'ENV::master',
        default_field: 'ENV'
      }

      @_compound = {}

      @field = {
        src: {member: 1, set: 'COMP+'},
        file: {key: 4, pair: 3},
        directory: {key: 3, pair: 2, set: 'DIR'},
        aux: {member: 4, set: 'COMP+'},
        cmt: {member: 2, set: 'COMP+'},
        environment: {key: 1, set: 'ENV', link: 1},
        ext: {member: 3, set: 'EXT'},
        module: {key: 2, pair: 1, set: 'MOD'},
        del: {member: 5, set: 'COMP+'}
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

