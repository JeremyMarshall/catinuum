'use strict';
var redis = require('redis');

exports.client = function() {

  var client;

  if (process.env.NODE_ENV == 'production') {
    var url = require('url');
    var redisURL = url.parse(process.env.REDISCLOUD_URL);
    client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
    client.auth(redisURL.auth.split(":")[1]);
  } else {
    client = redis.createClient();
  }

  console.log(client);

  return client;
}

