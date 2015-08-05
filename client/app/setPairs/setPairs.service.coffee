'use strict'

angular.module 'catinuumApp'
.service 'setPairs', ['$http', 'environments', 'meta', '$rootScope', ($http, environments, meta, $rootScope) ->
  {
  constructor: ->
    @currenv
    @raw = []
    @getData()

  process: (data) ->
    tmp = data.sort(@compare)
    @raw = []

    lastval = ['']
    tree = []

    @raw = [{label: '/', id: 0, children: [], collapsed: 0, data: null}]


    for t in tmp

      currval = t.entry.match(///([\w-]+)///g)[1..]

      idx = 0
      tree = @raw[0]['children']

      id = ''
      for c, index in currval

        if id == ''
          id = c
        else
          id = "#{id}::#{c}"

        if lastval[idx] != c
          lastval[idx] = c
          tree.push {
            label: c,
            id: id,
            children: [],
            collapsed: 0,
            data: if index == currval.length - 1 then t.data else null
          }

          for i in [idx + 1..idx + 2]
            lastval[i] = ''

        tree = tree[tree.length - 1].children
        idx = idx + 1

  getData: () ->
    if @currenv != environments.getCurr()
      @currenv = environments.getCurr()

      request = $http.get "/api/sets/full/#{@currenv}"
      request.then (result) =>
        @process(result.data)
        #$rootScope.$broadcast('pairs:updated');

  getFilteredData: (sets) ->
    s = sets.join('/')

    if  s.length > 0
      request = $http.get "/api/sets/interfull/#{@currenv}/#{s}"
    else
      request = $http.get "/api/sets/full/#{@currenv}"

    request.then (result) =>
      @process(result.data)



  getRaw: () ->
    @getData()
    return @raw


  compare: (a, b) ->
    if a.entry < b.entry
      return -1
    if a.entry > b.entry
      return 1
    0
  }
]
