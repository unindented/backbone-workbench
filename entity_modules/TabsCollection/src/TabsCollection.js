define(function (require) {
  'use strict';

  var _ = require('underscore');
  var Backbone = require('backbone');
  var TabModel = require('TabModel');

  /**
   * Tabs collection.
   */
  return Backbone.Collection.extend({
    model: TabModel,
    comparator: 'order',

    initialize: function (models, options) {
      this.parent = (options != null ? options.parent : null);

      this.listenTo(this, 'change:active', this._onChangeActive);
    },

    url: function () {
      return this.parent.url();
    },

    _onChangeActive: function (model, active, options) {
      // When a tab in this collection becomes active...
      if (this.contains(model) && active) {
        // ... deactivate all others.
        _.invoke(this.without(model), 'set', {active: false});
      }

      // Also bubble the event to the parent.
      if (this.parent != null) {
        this.parent.trigger('change:active', model, active, options);
      }
    }
  });
});
