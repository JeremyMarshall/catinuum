'use strict';

var _ = require('lodash');
var redis = require('redis');

var client = require('../../components/myredis').client();
var meta = require('../../components/meta').meta();
var data = require('../../components/fakedata').data();

function hset(key, what, data) {
  meta.match(what)

  for (var f in meta._compound[what]) {
    if (data[meta._compound[what][f]] != undefined) {
      client.hset(key, meta._compound[what][f], data[meta._compound[what][f]], redis.print);
    }
  }
}

function hset2(key, item, what, data) {
  meta.match_str(what)

  for (var f in meta._compound[what]) {
    client.hset(key, data[f], item, redis.print);
  }
}


function getKey(what, data) {
  meta.match(what)

  var k = meta._labels[what]
  for (var f in meta._compound[what]) {
    k += meta.separator + data[meta._compound[what][f]]
  }
  client.sadd('ALL' + meta.separator + what, k);

  return k
}

function sets(pair, what, data) {
  meta.match_str(what)
  for (var j in meta._compound[what]) {

    var val;
    var section = meta._compound[what][j];
    var field = meta.fields[j][what];

    if(section.slice(-1) == '+') {
      section = section.slice(0,-1);
      field = field.slice(0,-1);
      if(data[j] == undefined)
        continue;
      val = j;
    }else{
      val = data[j]
    }

    client.sadd(field + meta.separator + val, pair);
    client.sadd(meta._labels['all'] + meta.separator + section, field + meta.separator + val);
    client.sadd(meta._labels['all'] + meta.separator + meta._labels[what], field + meta.separator + val);

    for (var k in meta._compound[what]) {
      var valInner;
      var sectionInner = meta._compound[what][k];

      if(sectionInner.slice(-1) == '+') {
        sectionInner = sectionInner.slice(0,-1);
        if(data[k] == undefined)
          continue;
        valInner = k;
      }else{
        valInner = data[k]
      }

      if ((j != k) && (valInner != val)) {
        client.sadd(sectionInner + meta.separator + valInner + meta.separator + 'sets', section + meta.separator + val);
      }
    }
  }
}

function set_types(what) {
  for (var k in meta._compound[what]) {

    var section = meta._compound[what][k];
    if(section.slice(-1) == '+') {
      section = section.slice(0, -1);
    }
    client.sadd(meta._labels['all'] + meta.separator + what + meta.separator + meta._labels['types'], section);
  }
}

function link(what) {

  client.smembers(what, function (err, reply) {
    reply.forEach(function (a) {
      reply.forEach(function (b) {
        if (a == b)
          return;

        var ar = [];
        ar.push(b);
        ar.push(a);

        //client.sinter(ar, redis.print);
        console.log ('here1');
        client.sinter(ar, function (err, reply2) {

          console.log(a);

          if (reply2.length > 0)
            client.sadd(a + '::sets', b, redis.print);
        });
      })
    })
  })
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
    link('ALL::ENV');

    res.json([]);
  }
}
