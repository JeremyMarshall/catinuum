'use strict'

angular.module 'catinuumApp'
.service 'setPairs', ['$http', 'environments', ($http, environments) ->
  new class Pairs
    constructor: ->
      @currenv
      @raw = []
      @getData()

    getData:() ->

      if @currenv != environments.getCurr()
        @currenv = environments.getCurr()

        request = $http.get "/api/sets/#{@currenv}"
        request.then (result) =>
          tmp = result.data
          tmp.sort()
          @raw = []

          lastdir = ''
          curridx = -1

          console.log(tmp)

          for t in tmp

            console.log(t)

            [prefix, dir, file] = t.match(/(\w+):([\w-]+)::([\w-]+)/)[1..3]

            if lastdir != dir
              lastdir = dir
              curridx++
              @raw.push {'label': dir, 'id': t, 'children': [], 'collapsed': 1}

            @raw[curridx].children.push {'label': file, 'id': t, 'children': []}

#{ "label" : "subUser1", "id" : "role11", "children" : [] },

    getRaw:() ->
      @getData()
      return @raw
]
