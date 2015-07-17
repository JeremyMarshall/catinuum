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
      src: {member: 0},
      //file: {key: 2, pair: 3, set: 'FILE'},
      file: {key: 2, pair: 3},
      directory: {key: 2, pair: 2, set: 'DIR'},
      aux: {member: 2},
      cmt: {member: 1},
      environment: {key: 1, set: 'ENV'},
      ext: {member: 3, set: 'EXT'},
      module: {pair: 1, set: 'MOD'},
      del: {member: 4}
    },
    match: match,
    match_str: match_str
  }
}

