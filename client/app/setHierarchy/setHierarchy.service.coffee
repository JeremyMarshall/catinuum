'use strict'

angular.module 'catinuumApp'
.service 'setHierarchy', ['$http', 'environments', 'meta', '$rootScope', ($http, environments, meta, $rootScope) ->
  new class Hierarchy
    constructor: ->
      @currenv
      @raw = []
      @getData()

    getData:() ->

      if @currenv != environments.getCurr()
        @currenv = environments.getCurr()

        request = $http.get "/api/sets/#{meta.sets(@currenv)}"
        request.then (result) =>
          tmp = result.data
          tmp.sort()
          @raw = []

          lastpre = ''
          curridx = -1

          for t in tmp
            [prefix, name] = t.match(///(\w+)#{meta.separator}([\w-]+)///)[1..2]

            if lastpre != prefix
              lastpre = prefix
              curridx++
              @raw.push {label: prefix, id: prefix, children: [], collapsed: 0}

            @raw[curridx].children.push {label: name, id: t, children: [], collapsed: 0}
            $rootScope.$broadcast('hierarchy:updated');

    getRaw:() ->
      @getData()
      return @raw
]
