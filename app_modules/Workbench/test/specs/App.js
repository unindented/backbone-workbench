define(function (require) {
  'use strict';

  var App = require('../../src/App');

  describe('Workbench', function () {
    var instance;
    var node;

    describe('#render', function () {
      beforeEach(function () {
        instance = new App();
        node = instance.el;
      });

      it('uses the `bw-app` class', function () {
        expect(node).toHaveClass('bw-app');
      });
    });
  });
});
