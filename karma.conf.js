'use strict';

var _ = require('underscore');
var path = require('path');
var util = require('util');
var webpackConfig = require('./webpack.live');
var webpackServerConfig = require('./webpack.server');

var basePath = process.env.BASE || (function () {
  var normalModules = webpackConfig.resolve.modulesDirectories;
  var loaderModules = webpackConfig.resolveLoader.modulesDirectories;
  var allModules = _.without(_.union(normalModules, loaderModules), 'node_modules');

  return util.format('+(%s)/**/', allModules.join('|'));
})();

var coveragePath = path.join(__dirname, 'coverage');


module.exports = function (config) {

  config.set({
    basePath:      basePath,

    webpack:       webpackConfig,
    webpackServer: webpackServerConfig,
    webpackPort:   9875,
    port:          9876,

    files: [
      {pattern: 'index.js',    watched: true, included: false, served: false},
      {pattern: 'src/**/*.*',  watched: true, included: false, served: false},
      {pattern: 'test/**/*.*', watched: true, included: true,  served: true}
    ],

    exclude: [
      'coverage/**/*.*'
    ],

    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    browsers:   ['PhantomJS'],
    frameworks: ['jasmine'],
    reporters:  process.env.COV ? ['dots', 'coverage'] : ['dots'],

    coverageReporter: {
      reporters: [
        {type: 'text', dir: coveragePath},
        {type: 'html', dir: coveragePath}
      ]
    },

    browserDisconnectTimeout: config.browserDisconnectTimeout * (process.env.COV ? 10 : 5),
    browserNoActivityTimeout: config.browserNoActivityTimeout * (process.env.COV ? 10 : 5)
  });

};
