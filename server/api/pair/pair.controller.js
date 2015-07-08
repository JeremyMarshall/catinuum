'use strict';

var _ = require('lodash');
var client = require('../../components/myredis').client();

// Get list of pairs
exports.index = function(req, res) {
  client.smembers('ALL:pairs', function (err, replies) {
      res.json(replies)
    })
};
