'use strict'

angular.module 'catinuumApp'
.factory 'environments', ['$http', ($http) ->
  new class Environments
    constructor: ->
      @currenv
      @envs
      @getData()

    getData: ->
      request = $http.get '/api/sets/ALL:envs'
      request.then (result) =>
        @envs = result.data
        @currenv = result.data[0]

    getEnvs: ->
      return @envs

    getCurr: ->
      return @currenv

    setCurr:(e) ->
      @currenv = e
]
