'use strict';

var _ = require('lodash');

var client;
var redis = require('redis');

if(process.env.NODE_ENV == 'production') {
  var url = require('url');
  var redisURL = url.parse(process.env.REDISCLOUD_URL);
  client = redis.createClient(redisURL.port, redisURL.hostname, {no_ready_check: true});
  client.auth(redisURL.auth.split(":")[1]);
}else {
  client = redis.createClient();
}

function all(req, res){
  client.smembers('ALL:keys', function (err, replies) {
    res.json(replies)
  })
}

// Get list of hashs
exports.index = function(req, res) {
  all(req, res)
};