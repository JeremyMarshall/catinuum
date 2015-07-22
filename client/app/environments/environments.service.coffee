'use strict'

angular.module 'catinuumApp'
.service 'environments', ['$http', 'meta', '$rootScope', ($http, meta, $rootScope) ->
  new class Environments
    constructor: ->
      @currenv
      @envs = {}
      @getData()

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

    getEnvs: ->
      return @envs

    getCurr: ->
      return @currenv

    setCurr:(e) ->
      @currenv = e
      $rootScope.$broadcast('env:updated', @currenv);
]
