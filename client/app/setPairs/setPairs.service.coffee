'use strict'

angular.module 'catinuumApp'
.service 'setPairs', ['$http', 'environments', 'meta', ($http, environments, meta) ->
  new class Pairs
    constructor: ->
      @currenv
      @raw = []
      @getData()

    process: (data) ->
      tmp = data
      tmp.sort()
      @raw = []

      lastval = ['']
      tree = []

      for t in tmp

        currval = t.entry.match(///([\w-]+)///g)[1..]

        idx = 0
        tree = @raw

        id = ''
        for c, index in currval

          if id == ''
            id = c
          else
            id = "#{id}::#{c}"

          if lastval[idx] != c
            lastval[idx] = c
            tree.push {label: c, id: id, children: [], collapsed: 0, data: if index==currval.length-1 then t.data else [] }

            for i in [idx+1..idx+2]
              lastval[i] = ''

          tree = tree[tree.length - 1].children
          idx = idx + 1

    getData:() ->
      if @currenv != environments.getCurr()
        @currenv = environments.getCurr()

        request = $http.get "/api/sets/full/#{@currenv}"
        request.then (result) =>
          @process(result.data)

    getFilteredData:(sets) ->

      s = sets.join('/')

      if  s.length > 0
        request = $http.get "/api/sets/interfull/#{@currenv}/#{s}"
      else
        request = $http.get "/api/sets/full/#{@currenv}"

      request.then (result) =>
        @process(result.data)



    getRaw:() ->
      @getData()
      return @raw
]
