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

// Get hash
exports.hash = function(req, res) {
  client.hgetall(req.param('hash'), function (err, replies) {
    res.json(replies)
  })
};

// Get hashkey
exports.hashkey = function(req, res) {
  client.hget(req.param('hash'), req.param('key'), function (err, replies) {
    res.json(replies)
  })
};

// Get list of hashs
exports.index = function(req, res) {
  client.smembers('ALL:keys', function (err, replies) {
    res.json(replies)
  })
};
