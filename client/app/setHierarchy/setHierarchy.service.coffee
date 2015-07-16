'use strict'

angular.module 'catinuumApp'
.service 'setHierarchy', ['$http', 'environments', ($http, environments) ->
  new class Hierarchy
    constructor: ->
      @currenv
      @raw = []
      @getData()

    getData:() ->

      if @currenv != environments.getCurr()
        @currenv = environments.getCurr()

        request = $http.get "/api/sets/#{@currenv}::sets"
        request.then (result) =>
          tmp = result.data
          tmp.sort()
          @raw = []

          lastpre = ''
          curridx = -1

          for t in tmp
            [prefix, name] = t.match(/(\w+)::([\w-]+)/)[1..2]

            if lastpre != prefix
              lastpre = prefix
              curridx++
              @raw.push {'label': prefix, 'id': t, 'children': [], 'collapsed': 1}

            @raw[curridx].children.push {'label': name, 'id': t, 'children': []}

            #{ "label" : "subUser1", "id" : "role11", "children" : [] },

    getRaw:() ->
      @getData()
      return @raw
]
