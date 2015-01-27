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
        'test/*.js'
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
      server: {
        options: {
          path: 'test/fixtures',
          port: 3011,
          keepalive: false
        }
      }
    },

    // Unit tests.
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      tests: ['test/*-test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run,
  // first run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'bower-browser', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
