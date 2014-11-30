define(function (require) {
  'use strict';

  var template = require('./Tab.ejs');

  var Backbone = require('backbone');

  /**
   * Individual tab.
   */
  var TabView = Backbone.View.extend({
    tagName: 'li',
    className: 'bw-tabs--item',
    template: template,

    events: {
      'click a': '_onClick'
    },

    initialize: function () {
      this.listenTo(this.model, 'change:active', this.render);
    },

    render: function () {
      var data = this.getTemplateData();
      this.$el.html(this.template(data));
      this.$el.toggleClass('is-active', !!data.active);
      return this;
    },

    getTemplateData: function () {
      return this.model.toJSON();
    },

    _onClick: function (evt) {
      evt.preventDefault();

      this.model.set({active: true});
    }
  });

  return TabView;
});
