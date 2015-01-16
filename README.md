# grunt-bower-browser

> Browser-based GUI manager of Bower

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

### Example config
In your project's Gruntfile, add a section named `bower-browser` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'bower-browser': {
    options: {
      path: 'path/to/project',
      port: 8080,
      cache: 0,
      open: false
    }
  }
});
```
## License
Copyright (c) 2015 Rakuten, Inc. Licensed under the [MIT license](LICENSE).
