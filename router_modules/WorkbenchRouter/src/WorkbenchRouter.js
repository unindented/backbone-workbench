define(function (require) {
  'use strict';

  var Backbone = require('backbone');

  /**
   * Router for the workbench app.
   */
  return Backbone.Router.extend({
    routes: {
      'tabs/*path': 'tab'
    },

    initialize: function (options) {
      this.root = options.root;

      this.listenTo(this.root, 'change:active', this._onChangeActive);
    },

    tab: function (path) {
      var fragments = path.split('/');

      var model = this.root;
      var collection = null;

      // Activate all tabs whose keys appear in the path.
      do {
        collection = model.get('args').collection;
        model = collection.get(fragments.shift());
        if (model != null) {
          model.set({active: true});
        }
      } while (model != null && fragments.length > 0);
    },

    _onChangeActive: function (model, active) {
      // If a tab becomes active...
      if (active) {
        // ... navigate to its URL.
        this.navigate(model.url());
      }
    }
  });

});
