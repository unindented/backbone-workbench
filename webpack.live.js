'use strict';

var _ = require('underscore');
var app = (process.env.APP || 'Workbench');


module.exports = _.extend(
  {
    entry: {
      'main': './app_modules/' + app
    },
    devServer: {
      'contentBase': './app_modules/' + app
    }
  },
  require('./webpack.common')({
    build: false,
    lint: true,
    cov: process.env.COV
  })
);
