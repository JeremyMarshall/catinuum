'use strict';

var _ = require('lodash');
var client = require('../../components/myredis').client();
var meta = require('../../components/meta').meta();
var data = require('../../components/fakedata').data();

function hset(key, what, data) {
  meta.match(what)

  for (var f in meta._compound[what]) {
    client.hset(key, meta._compound[what][f], data[meta._compound[what][f]]);
  }
}

function hset2(key, item, what, data) {
  meta.match_str(what)

  for (var f in meta._compound[what]) {
    client.hset(key, data[f], item);
  }
}


function getKey(what, data) {
  meta.match(what)

  var k = meta._labels[what]
  for (var f in meta._compound[what]) {
    k += meta.separator + data[meta._compound[what][f]]
  }
  client.sadd('ALL' + meta.separator+ what, k);

  return k
}

function sets(pair, what, data) {
  meta.match_str(what)
  for (var j in meta._compound[what]) {

    client.sadd(meta.fields[j][what] + meta.separator + data[j], pair);
    client.sadd(meta._labels['all'] + meta.separator + meta._compound[what][j], meta.fields[j][what] + meta.separator +  data[j]);
    client.sadd(meta._labels['all'] + meta.separator + meta._labels[what], meta.fields[j][what] + meta.separator +  data[j]);

    for (var k in meta._compound[what]) {
      if ((j != k) && (data[k] != data[j])) {
        client.sadd(meta._compound[what][k] + meta.separator + data[k] + meta.separator + 'sets', meta._compound[what][j] + meta.separator + data[j]);
      }
    }
  }
}

function set_types(what) {
  for (var k in meta._compound[what]) {
    client.sadd(meta._labels['all'] + meta.separator + what + meta.separator + meta._labels['types'], meta._compound[what][k]);

  }
}

exports.index = function (req, res) {

  var load = new function () {
    client.flushdb();

    data.forEach(function (entry) {

      var key = getKey('key', entry);
      var pair = getKey('pair', entry);

      hset(key, 'member', entry);
      hset2(pair, key, 'link', entry);
      sets(pair, 'set', entry);
    });

    set_types('set');

    res.json([]);
  }
}
