define(function (require) {
  'use strict';

  var template = require('./Panel.ejs');

  var Backbone = require('backbone');
  var SubviewsMixin = require('SubviewsMixin');

  /**
   * Panel shown to the right of the tabs.
   */
  var PanelView = Backbone.View.extend({
    className: 'bw-tabs--panel',
    template: template,

    views: {
      'ChildView': '_getChildView'
    },

    render: function () {
      var data = this.getTemplateData();
      this.$el.html(this.template(data));
      this.$el.toggleClass('is-leaf', !!data.leaf);
      return this;
    },

    getTemplateData: function () {
      return (this.model != null ? this.model.toJSON() : {});
    },

    _getChildView: function () {
      if (this.model == null) {
        return new Backbone.View();
      }

      var View = this.model.get('view');
      var args = this.model.get('args');
      return new View(args);
    }
  });

  SubviewsMixin.call(PanelView.prototype);

  return PanelView;
});
