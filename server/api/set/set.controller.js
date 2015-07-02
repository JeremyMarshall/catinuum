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

function get(key, req, res){
  client.smembers(key, function (err, replies) {
    res.json(replies)
  })
}

function inter(keys, req, res){
  client.sinter(keys, function (err, replies) {
    res.json(replies)
  })
}

// Get list of sets
exports.index = function(req, res) {
  get('ALL:sets', req, res)
};

// Get set members
exports.set = function(req, res) {
  get( req.param('set'), req, res)
};

// Get intersection of sets
exports.inter = function(req, res) {
  console.log(req.params[0])
  inter( req.params[0].split('/'), req, res)
};
