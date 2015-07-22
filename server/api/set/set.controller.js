'use strict';

var _ = require('lodash');
var async = require("async");
var shortid = require('shortid');

var client = require('../../components/myredis').client();
var meta = require('../../components/meta').meta();

function get(key, req, res) {
  client.smembers(key, function (err, replies) {
    res.json(replies)
  })
}

function inter(keys, req, res) {
  client.sinter(keys, function (err, replies) {
    res.json(replies)
  })
}

// Get list of sets
exports.index = function (req, res) {
  get(meta.all_sets(), req, res)
};

// Get set members
exports.set = function (req, res) {
  get(req.param('set'), req, res)
};

// Get set members and unpack hash keys
exports.full = function (req, res) {
  client.smembers(req.param('set'), function (err, replies) {

    var result = []

    async.eachSeries(replies,
      function (r, outCb) {
        client.hkeys(r,
          function (err, replies2) {
            async.eachSeries(replies2,
              function (r2, inCb) {
                result.push(r + "::" + r2)
                inCb(null)
              },
              function (err) {
                outCb(null)
              }
            )
          }
        )
      },
      function (err) {
        res.json(result);
      }
    )
  })
}

// Get intersection of sets
exports.inter = function (req, res) {
  inter(req.params[0].split('/'), req, res)
};

exports.interfull = function (req, res) {

  var params = req.params[0].split('/');
  var env = params.shift();
  var breakdown = [];
  var unions = [env];

  async.eachSeries(params, function (p, cb1) {
    var parts = p.split('::');
    if (parts.length == 2)
      if (breakdown[parts[0]])
        breakdown[parts[0]].push(p);
      else {
        var tset = shortid.generate();
        unions.push(tset);
        breakdown[parts[0]] = [tset, p];
      }
    cb1(null);
  }, function (err) {

    async.forEach(Object.keys(breakdown), function (b, cb2) {
      client.sunionstore(breakdown[b], function (err, r) {
        client.expire(breakdown[b][0], 30, function (err, r) {
          cb2(null);
        });
      });
    }, function (err) {

      client.sinter(unions, function (err, replies) {

        var result = [];

        async.eachSeries(replies, function (r, outCb) {
          client.hkeys(r, function (err, replies2) {
              async.eachSeries(replies2, function (r2, inCb) {
                  result.push(r + "::" + r2);
                  inCb(null)
                },
                function (err) {
                  outCb(null)
                }
              )
            }
          )
        }, function (err) {
          res.json(result);
        })
      })
    })
  })
};
