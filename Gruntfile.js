'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // ESLint
    eslint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js'
      ]
    },

    // "bower-browser" task for tests
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

    // Unit tests
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      tests: ['test/*-test.js']
    }
  });

  grunt.loadTasks('tasks');

  // Whenever the "test" task is run,
  // first run this plugin's task(s), then test the result.
  grunt.registerTask('test', ['eslint', 'bower-browser', 'mochaTest']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);
};
