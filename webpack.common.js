'use strict';

var path = require('path');

var reworkVars = require('rework-vars');
var reworkCalc = require('rework-calc');
var reworkClear = require('rework-clearfix');
var reworkColor = require('rework-color-function');


module.exports = function (options) {
  options = options || {};

  var output = path.join(__dirname, 'dist');

  return {
    debug: !options.build,
    devtool: !options.build ? 'inline-source-map' : null,

    output: {
      path: output,
      pathinfo: !options.build,

      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
    },

    externals: options.build ? [
      'jquery',
      'underscore',
      'underscore.string',
      'backbone',
      'backbone-with-subviews'
    ] : [],

    resolve: {
      extensions: ['', '.js'],

      modulesDirectories: [
        'app_modules',
        'router_modules',
        'entity_modules',
        'view_modules',
        'mixin_modules',
        'util_modules',

        'web_modules',
        'node_modules'
      ]
    },

    resolveLoader: {
      extensions: ['', '.js', '.loader.js'],

      modulesDirectories: [
        'node_modules'
      ]
    },

    module: {
      preLoaders: options.lint ? [
        {
          test:    /\.js$/,
          exclude: /(node_modules)\//,
          loader:  'jshint!jscs'
        }
      ] : [],

      loaders: [
        {
          test:   /\.ejs$/,
          loader: 'ejs-compiled'
        },
        {
          test:   /\.css$/,
          loader: 'style!css!autoprefixer!rework'
        },
        {
          test:   /test\/specs\/.*\.js$/,
          loader: 'wrap?spec'
        }
      ],

      postLoaders: options.cov ? [{
        test:    /\.js$/,
        exclude: /(test|node_modules)\//,
        loader:  'istanbul-instrumenter'
      }] : []
    },

    jshint: {
      emitErrors: true
    },

    jscs: {
      emitErrors: true
    },

    rework: {
      use: [
        reworkVars({preserve: false}),
        reworkCalc,
        reworkClear,
        reworkColor
      ]
    },

    wrap: {
      spec: {
        after: [
          [
            'beforeEach(function () {',
            '  jasmine.addMatchers(require("jasmine-jquery-matchers"));',
            '});'
          ].join('\n')
        ]
      }
    }
  };
};
