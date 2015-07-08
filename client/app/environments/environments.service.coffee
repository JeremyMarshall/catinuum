'use strict'

angular.module 'catinuumApp'
.service 'environments', ['$http', ($http) ->
  new class Environments
    constructor: ->
      @currenv
      @envs = {}
      @getData()

    getData: ->
      request = $http.get '/api/sets/ALL:sets'
      #request = $http.get '/api/sets/ALL:envs'
      request.then (result) =>

        tmp = result.data.sort()

        for t in tmp
          [prefix, item] = t.match(/(\w+):([\w-]+)/)[1..2]

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
