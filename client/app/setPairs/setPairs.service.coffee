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

          lastmod = ''
          lastdir = ''
          currmodidx = -1
          currdiridx = -1

          for t in tmp

            console.log(t)

            [prefix, module, dir, file] = t.match(/([\w-]+)::([\w-]+)::([\w-]+)::([\w-]+)/)[1..4]

            if lastmod != module
              lastmod = module
              lastdir = ''

              currmodidx++
              currdiridx = -1
              @raw.push {'label': module, 'id': t, 'children': [], 'collapsed': 0}

            if lastdir != dir
              lastdir = dir
              currdiridx++
              @raw[currmodidx].children.push {'label': dir, 'id': t, 'children': [], 'collapsed': 0}

            @raw[currmodidx].children[currdiridx].children.push {'label': file, 'id': t, 'children': []}

#{ "label" : "subUser1", "id" : "role11", "children" : [] },

    getRaw:() ->
      @getData()
      return @raw
]
