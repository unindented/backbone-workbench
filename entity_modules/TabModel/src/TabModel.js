define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  /**
   * Tab model.
   */
  return Backbone.Model.extend({
    defaults: {
      leaf: true,
      active: false
    },

    url: function () {
      // Use this model's collection URL as base, or use `tabs` as fallback.
      var base = (this.collection != null ? this.collection.url() : 'tabs');
      // Then concatenate it with this model's ID, or return it as-is if there's
      // no ID (which should mean this model is the root of the tree).
      var url = base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
      return (this.id != null ? url : base);
    }
  });
});
