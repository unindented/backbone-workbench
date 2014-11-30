define(function (require) {
  'use strict';

  var _ = require('underscore');
  var _s = require('underscore.string');

  var TabModel = require('TabModel');
  var TabsCollection = require('TabsCollection');
  var TabsView = require('TabsView');

  /**
   * Tab generator.
   */

  var generateTabs = function (generator, contexts) {
    var model = new TabModel({
      view: TabsView
    });

    var collection = new TabsCollection(null, {
      parent: model
    });

    collection.add(_.map(contexts, function (ctx, name) {
      return generateTab(generator, expandContext(name, ctx));
    }));

    return model.set({
      args: {collection: collection}
    });
  };

  var expandContext = function (name, context) {
    var cases = _.map(context.keys(), function (key) {
      return context(key);
    });

    return {
      name: name,
      cases: cases
    };
  };

  var generateTab = function (generator, data) {
    var model = new TabModel({
      id: _s.slugify(data.name),
      name: data.name,
      order: data.order,
      view: data.view
    });

    var collection = new TabsCollection(null, {
      parent: model
    });

    if (data.cases) {
      collection.add(_.map(data.cases, function (kase) {
        return generateTab(generator, _.extend({view: data.view}, kase));
      }));

      model.set({
        leaf: false,
        view: TabsView,
        args: {collection: collection}
      });
    }
    else if (data.schema) {
      model.set({
        args: generator.generate(data.schema)
      });
    }

    return model;
  };

  return {
    generateTabs: generateTabs
  };
});
