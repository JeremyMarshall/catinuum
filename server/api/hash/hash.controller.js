'use strict';

var _ = require('lodash');
var client = require('../../components/myredis').client();

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
