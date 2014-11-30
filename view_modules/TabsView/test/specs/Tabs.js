define(function (require) {
  'use strict';

  var TabsCollection = require('TabsCollection');
  var TabsView = require('../../src/Tabs');

  describe('Tabs', function () {
    var collection;
    var instance;
    var node;

    describe('#render', function () {
      beforeEach(function () {
        collection = new TabsCollection();

        instance = new TabsView({collection: collection});
        node = instance.el;
      });

      it('uses the `bw-tabs` class', function () {
        expect(node).toHaveClass('bw-tabs');
      });
    });
  });

});
