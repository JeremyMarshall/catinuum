'use strict'

angular.module 'catinuumApp'
.service 'environments', ['$http', 'meta', '$rootScope', ($http, meta, $rootScope) ->
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

        @currenv = result.data[0]

    getData1: ->
      request = $http.get "/api/sets/ALL::ENV"
      request.then (result) =>

        tmp = result.data.sort()

        for t in tmp
          [prefix, item] = t.match(///(\w+)#{meta.separator}([\w-]+)///)[1..2]

          @envs1.push item

        @delta = @envs1[0]
        @baseline = @envs1[0]

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
      $rootScope.$broadcast('env:updated', @currenv);

    setDelta:(e) ->
      @delta = e
      $rootScope.$broadcast('delta:updated', @delta);

    setBaseline:(e) ->
      @baseline = e
      $rootScope.$broadcast('baselie:updated', @baseline);
]
