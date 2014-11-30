define(function (require) {
  'use strict';

  var PanelView = require('../../src/Panel');

  describe('Panel', function () {
    var instance;
    var node;

    describe('#render', function () {
      beforeEach(function () {
        instance = new PanelView();
        node = instance.el;
      });

      it('uses the `bw-tabs--panel` class', function () {
        expect(node).toHaveClass('bw-tabs--panel');
      });
    });
  });

});
