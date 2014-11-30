'use strict';

var _ = require('underscore');


module.exports = _.extend(
  {
    entry: {
      'backbone-workbench': './app_modules/Workbench'
    }
  },
  require('./webpack.common')({
    build: true,
    lint: true
  })
);
