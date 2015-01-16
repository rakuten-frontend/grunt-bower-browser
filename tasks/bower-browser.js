'use strict';

var bowerBrowser = require('bower-browser');

module.exports = function (grunt) {

  grunt.registerMultiTask('bower-browser', 'Browser-based GUI manager of Bower', function () {
    var options = this.options({});
    this.async();
    bowerBrowser(options);
  });

};
