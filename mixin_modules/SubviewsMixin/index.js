(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['underscore'], factory);
  }
  else if (typeof exports === 'object') {
    module.exports = factory(require('underscore'));
  }
  else {
    root.withSubviews = factory(root._);
  }

}(this, function (_) {
  'use strict';

  var subviews = {};

  var getDataAttribute = function (el, attr) {
    return el.getAttribute('data-' + attr);
  };

  var getSubviews = function (view) {
    return subviews[view.cid] || (subviews[view.cid] = {});
  };

  var getSubview = function (view, key) {
    return getSubviews(view)[key];
  };

  var resetSubviews = function (view) {
    delete subviews[view.cid];
  };

  var attachSubviews = function (view) { /* jshint -W084 */
    var subviews = getSubviews(view);
    _.each(view.views, function (fn, tag) {
      var elements;
      var element;
      var i;

      fn = _.isFunction(fn) ? fn : _.bind(view[fn], view);

      elements = view.el.getElementsByTagName(tag);
      for (i = 0; element = elements[0]; i++) {
        attachSubview(view, subviews, fn, element, i);
      }
    });
  };

  var attachSubview = function (view, subviews, fn, el, index) {
    var subkey = el.getAttribute('key') || index;
    var key = el.tagName + subkey;
    var subview = getSubview(view, key);
    if (!subview) {
      subview = subviews[key] = fn(subkey, _.partial(getDataAttribute, el));
      subview.remove = _.wrap(subview.remove, _.partial(subviewRemoveWrapper, view, key));
      subview.render();
    }
    el.parentNode.replaceChild(subview.el, el);
  };

  var detachSubviews = function (view) {
    _.each(getSubviews(view), function (subview) {
      var parent = subview.el.parentNode;
      if (parent) {
        parent.removeChild(subview.el);
      }
    });
  };

  var extendWrapper = function (extend, protoProps, staticProps) {
    if (protoProps.render) {
      protoProps.render = _.wrap(protoProps.render, renderWrapper);
    }
    if (protoProps.remove) {
      protoProps.remove = _.wrap(protoProps.remove, removeWrapper);
    }
    return extend.call(this, protoProps, staticProps);
  };

  var renderWrapper = function (render) {
    var returnValue;
    this.beforeRender && this.beforeRender();
    detachSubviews(this);
    returnValue = render.call(this);
    attachSubviews(this);
    this.afterRender && this.afterRender();
    return returnValue;
  };

  var removeWrapper = function (remove) {
    _.invoke(getSubviews(this), 'remove');
    resetSubviews(this);
    return remove.call(this);
  };

  var subviewRemoveWrapper = function (parent, key, remove) {
    var subviews = getSubviews(parent);
    delete subviews[key];
    return remove.call(this);
  };

  // Mixes the subviews functionality into an existing Backbone.View,
  // e.g. withSubviews(ExampleView.prototype);
  var withSubviews = function () {
    this.constructor.extend = _.wrap(this.constructor.extend, extendWrapper);
    this.render = _.wrap(this.render, renderWrapper);
    this.remove = _.wrap(this.remove, removeWrapper);
  };

  return withSubviews;
}));
