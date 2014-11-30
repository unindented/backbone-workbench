define(function (require) {
  'use strict';

  require('./Tabs.css');
  var template = require('./Tabs.ejs');

  var Backbone = require('backbone');
  var SubviewsMixin = require('SubviewsMixin');
  var TabView = require('./Tab');
  var PanelView = require('./Panel');

  /**
   * Collection of tabs.
   *
   * Clicking on a tab will make it active, and its corresponding panel visible.
   */
  var TabsView = Backbone.View.extend({
    className: 'bw-tabs',
    template: template,

    views: {
      'TabView': '_getTabView',
      'PanelView': '_getPanelView'
    },

    initialize: function (options) {
      options = options || {};

      this.logo = options.logo;

      this.listenTo(this.collection, 'change', this.render);
    },

    beforeRender: function () {
      this.scroll = this.$('> .bw-tabs--navigation').scrollTop();
    },

    render: function () {
      this.$el.html(this.template(this.getTemplateData()));
      return this;
    },

    afterRender: function () {
      this.$('> .bw-tabs--navigation').scrollTop(this.scroll);
      delete this.scroll;
    },

    getTemplateData: function () {
      var activeTab = this.collection.findWhere({active: true});

      return {
        logo: this.logo,
        tabs: this.collection.pluck('id'),
        selection: (activeTab != null ? activeTab.get('id') : null)
      };
    },

    _getTabView: function (key) {
      var tab = this.collection.get(key);
      return new TabView({model: tab});
    },

    _getPanelView: function (key) {
      var panel = this.collection.get(key);
      return new PanelView({model: panel});
    }
  });

  SubviewsMixin.call(TabsView.prototype);

  return TabsView;
});
