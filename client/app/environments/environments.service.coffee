'use strict'

angular.module 'catinuumApp'
.service 'environments', ['$http', 'meta', ($http, meta) ->
  new class Environments
    constructor: ->
      @currenv
      @envs = {}
      @getData()

    getData: ->
      request = $http.get "/api/sets/#{meta.all_sets()}"
      request.then (result) =>

        tmp = result.data.sort()

        for t in tmp
          [prefix, item] = t.match(///(\w+)#{meta.separator}([\w-]+)///)[1..2]

          if ! @envs[prefix]
            @envs[prefix] = []

          @envs[prefix].push item

        #@envs = result.data.sort()
        @currenv = result.data[0]

    getEnvs: ->
      return @envs

    getCurr: ->
      return @currenv

    setCurr:(e) ->
      @currenv = e
]
