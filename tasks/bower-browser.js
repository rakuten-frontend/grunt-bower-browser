'use strict';

var bowerBrowser = require('bower-browser');

module.exports = function (grunt) {
  grunt.registerMultiTask('bower-browser', 'Run browser-based GUI manager of Bower ', function () {
    var options = this.options({
      keepalive: true
    });
    var done = this.async();
    var app = bowerBrowser(options);
    if (!options.keepalive) {
      app.on('start', function () {
        done();
      });
    }
  });
};
