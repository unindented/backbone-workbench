define(function (require) {
  'use strict';

  require('./App.css');
  var template = require('./App.ejs');

  var _ = require('underscore');
  var Backbone = require('backbone');
  var SubviewsMixin = require('SubviewsMixin');
  var ContextTabs = require('ContextTabs');
  var WorkbenchRouter = require('WorkbenchRouter');

  /**
   * Workbench app.
   */
  var App = Backbone.View.extend({
    className: 'bw-app',
    template: template,

    views: {
      TabsView: '_getTabsView'
    },

    initialize: function (options) {
      options = options || {};

      // This generates a tree structure of tabs and views that will become our
      // main navigation.
      this.root = ContextTabs.generateTabs(options.generator, options.contexts);

      this.logo = options.logo;
      this.router = new WorkbenchRouter({root: this.root});
    },

    start: function () {
      Backbone.history.start();
      return this;
    },

    render: function () {
      this.$el.html(this.template());
      return this;
    },

    _getTabsView: function () {
      // This renders the root of the tree structure, so the user will see the
      // first level of nav items. Clicking on one of these items will make it
      // active, triggering a route change.
      var View = this.root.get('view');
      var args = _.extend({logo: this.logo}, this.root.get('args'));

      return new View(args);
    }
  });

  SubviewsMixin.call(App.prototype);

  return App;
});
