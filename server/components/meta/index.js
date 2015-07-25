'use strict';

module.exports.meta = function(){

  var match = function (what) {
    if (!this._compound[what]) {

      this._compound[what] = []

      for (var k in this.fields) {
        if (this.fields[k][what]) {
          this._compound[what][this.fields[k][what]] = k;
        }
      }
    }
  }

  var match_str = function (what) {
    if (!this._compound[what]) {

      this._compound[what] = {}

      for (var k in this.fields) {
        if (this.fields[k][what]) {
          this._compound[what][k] = this.fields[k][what];
        }
      }
    }
  }

  var all_sets = function() {
    return this._labels.all + this.separator + this._labels.set;
  }

  var is_member = function(f){
    this.match_str(f);


  }

  return {
    separator: '::',

    _labels: {
      key: 'KEY',
      pair: 'N-PLE',
      all: 'ALL',
      set: 'sets',
      types: 'types'
    },

    _compound: {},

    fields: {
      src: {member: 1},
      //file: {key: 2, pair: 3, set: 'FILE'},
      file: {key: 4, pair: 3},
      directory: {key: 3, pair: 2, set: 'DIR'},
      aux: {member: 3},
      cmt: {member: 2},
      environment: {key: 1, set: 'ENV', link: 1},
      ext: {member: 3, set: 'EXT'},
      module: {key: 2, pair: 1, set: 'MOD'},
      del: {member: 5}
    },
    match: match,
    match_str: match_str,
    all_sets: all_sets
  }
}

