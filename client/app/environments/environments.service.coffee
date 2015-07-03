'use strict'

angular.module 'catinuumApp'
.factory 'environments', ($http, $q) ->
  # AngularJS will instantiate a singleton by calling 'new' on this function

  data: ''
  current: ''

  makeRequest: (url) ->

# Create the deferred object
    deferred = $q.defer()
    $http.get(url).then (resp) ->
      deferred.resolve resp.data
      return

    deferred.promise

  getData:() ->
    unless @data

# Request has not been made, so make it
      console.log "file requested, only fires once"
      @data = @makeRequest('/api/sets/ALL:envs')

    # Return the myObject stored on the service
    @data

  setcurrenv: (e) ->
    @current = e
