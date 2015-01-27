'use strict';

module.exports = function (grunt) {

  // Load all npm grunt tasks.
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Configuration to be run (and then tested).
    'bower-browser': {
      options: {
        open: false
      },
      custom: {
        options: {
          port: 3011,
          keepalive: false
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run,
  // first run this plugin's task(s), then test the result.
  // grunt.registerTask('test', ['jshint', bower-browser', 'nodeunit']);
  grunt.registerTask('test', ['jshint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
