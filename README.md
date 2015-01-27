# grunt-bower-browser

> Run browser-based GUI manager of Bower

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]

This is a Grunt interface of [bower-browser](https://github.com/rakuten-frontend/bower-browser).  
The original bower-browser has own CLI and API.
Please refer the [documentation](https://github.com/rakuten-frontend/bower-browser#readme) for details.

## Getting Started
If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-bower-browser --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-bower-browser');
```

## The "bower-browser" task

### Options
See the [API specification](https://github.com/rakuten-frontend/bower-browser#api) of bower-browser.
Options except for `keepalive` follow the spec.

#### keepalive
Type: 'Boolean'  
Default: `true`

Set `false` to proceed to next task after the server is started.

### Example config
In your project's Gruntfile, add a section named `bower-browser` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'bower-browser': {
    server: {
      options: {
        path: 'path/to/target',  // Location of bower.json. default: project root
        port: 8080,              // Port number. default: 3010
        cache: 0,                // Cache TTL. Set 0 to force to fetch API. default: 86400 (24hrs)
        open: false              // Prevent opening browser. default: true (open automatically)
      }
    }
  }
});
```

## License
Copyright (c) 2015 Rakuten, Inc. Licensed under the [MIT license](LICENSE).

[npm-image]: https://img.shields.io/npm/v/grunt-bower-browser.svg?style=flat
[npm-url]: https://www.npmjs.com/package/grunt-bower-browser
[travis-image]: https://img.shields.io/travis/rakuten-frontend/grunt-bower-browser/master.svg?style=flat
[travis-url]: https://travis-ci.org/rakuten-frontend/grunt-bower-browser
[deps-image]: http://img.shields.io/david/rakuten-frontend/grunt-bower-browser.svg?style=flat
[deps-url]: https://david-dm.org/rakuten-frontend/grunt-bower-browser
