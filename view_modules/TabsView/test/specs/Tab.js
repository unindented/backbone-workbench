define(function (require) {
  'use strict';

  var TabModel = require('TabModel');
  var TabView = require('../../src/Tab');

  describe('Tab', function () {
    var model;
    var instance;
    var node;

    describe('#render', function () {
      beforeEach(function () {
        model = new TabModel({
          id: 'foo',
          name: 'Foo'
        });

        instance = new TabView({model: model});
        node = instance.render().el;
      });

      it('uses the `bw-tabs--item` class', function () {
        expect(node).toHaveClass('bw-tabs--item');
      });

      it('nests a `bw-tabs--target` element with its name', function () {
        expect(node).toHaveDescendantWithText('.bw-tabs--target', 'Foo');
      });
    });
  });

});
