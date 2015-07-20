'use strict'

angular.module 'catinuumApp'
.service 'setPairs', ['$http', 'environments', 'meta', ($http, environments, meta) ->
  new class Pairs
    constructor: ->
      @currenv
      @raw = []
      @getData()

    getData:() ->

      if @currenv != environments.getCurr()
        @currenv = environments.getCurr()

        request = $http.get "/api/sets/full/#{@currenv}"
        request.then (result) =>
          tmp = result.data
          tmp.sort()
          @raw = []

          lastval = ['']
          tree = []


          for t in tmp

            currval = t.match(///([\w-]+)///g)[1..]

            idx = 0
            tree = @raw

            id = ''
            for c in currval

              if id == ''
                id = c
              else
                id = "#{id}::#{c}"

              if lastval[idx] != c
                lastval[idx] = c
                tree.push {label: c, id: id, children: [], collapsed: 0, checked:false }

                for i in [idx+1..idx+2]
                  lastval[i] = ''

              tree = tree[tree.length - 1].children
              idx = idx + 1

    getRaw:() ->
      @getData()
      return @raw
]
