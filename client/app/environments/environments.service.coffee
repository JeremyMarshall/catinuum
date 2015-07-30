'use strict'

angular.module 'catinuumApp'
.service 'environments', ['$http', 'meta', '$rootScope', '$cookies', ($http, meta, $rootScope, $cookies) ->
  new class Environments
    constructor: ->
      @currenv
      @envs = {}
      @envs1 = []
      @getData()
      @getData1()

    getData: ->
      request = $http.get "/api/sets/"
      request.then (result) =>

        tmp = result.data.sort()

        for t in tmp
          [prefix, item] = t.match(///(\w+)#{meta.separator}([\w-]+)///)[1..2]

          if ! @envs[prefix]
            @envs[prefix] = []

          @envs[prefix].push item

        @currenv = if $cookies.get('environment') then $cookies.get('environment') else 'ENV::master'

    getData1: ->
      request = $http.get "/api/sets/ALL::ENV"
      request.then (result) =>

        tmp = result.data.sort()

        for t in tmp
          [prefix, item] = t.match(///(\w+)#{meta.separator}([\w-]+)///)[1..2]

          @envs1.push item

        @delta = if $cookies.get('delta') then $cookies.get('delta') else 'master'

        @baseline = if $cookies.get('baseline') then $cookies.get('baseline') else 'master'

    getEnvs: ->
      return @envs

    getEnvs1: ->
      return @envs1

    getCurr: ->
      return @currenv

    getBaseline: ->
      return @baseline

    getDelta: ->
      return @delta

    setCurr:(e) ->
      @currenv = e
      $cookies.put( 'environment', e)
      $rootScope.$broadcast('env:updated', @currenv)

    setDelta:(e) ->
      @delta = e
      $cookies.put( 'delta', e)
      $rootScope.$broadcast('delta:updated', @delta)

    setBaseline:(e) ->
      @baseline = e
      $cookies.put( 'baseline', e)
      $rootScope.$broadcast('baselie:updated', @baseline)
]
