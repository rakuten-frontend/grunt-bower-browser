/* jshint mocha: true */
'use strict';

var assert = require('assert');
var http = require('http');

describe('bower-browser', function () {

  it('returns HTTP response according to the options', function (done) {
    http.get('http://localhost:3011/', function (res) {
      assert(res.statusCode === 200);
      done();
    });
  });

});
