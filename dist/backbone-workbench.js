!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("backbone"),require("underscore"),require("underscore.string")):"function"==typeof define&&define.amd?define(["backbone","underscore","underscore.string"],t):"object"==typeof exports?exports["backbone-workbench"]=t(require("backbone"),require("underscore"),require("underscore.string")):e["backbone-workbench"]=t(e.backbone,e.underscore,e["underscore.string"])}(this,function(__WEBPACK_EXTERNAL_MODULE_1__,__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_27__){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){var a;a=function(){"use strict";return n(13)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e){e.exports=__WEBPACK_EXTERNAL_MODULE_1__},function(e){e.exports=__WEBPACK_EXTERNAL_MODULE_2__},function(e,t,n){var a,r,i;!function(o,s){"use strict";r=[n(2)],a=s,i="function"==typeof a?a.apply(t,r):a,!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";var t={},n=function(e,t){return e.getAttribute("data-"+t)},a=function(e){return t[e.cid]||(t[e.cid]={})},r=function(e,t){return a(e)[t]},i=function(e){delete t[e.cid]},o=function(t){var n=a(t);e.each(t.views,function(a,r){var i,o,c;for(a=e.isFunction(a)?a:e.bind(t[a],t),i=t.el.getElementsByTagName(r),c=0;o=i[0];c++)s(t,n,a,o,c)})},s=function(t,a,i,o,s){var c=o.getAttribute("key")||s,l=o.tagName+c,u=r(t,l);u||(u=a[l]=i(c,e.partial(n,o)),u.remove=e.wrap(u.remove,e.partial(b,t,l)),u.render()),o.parentNode.replaceChild(u.el,o)},c=function(t){e.each(a(t),function(e){var t=e.el.parentNode;t&&t.removeChild(e.el)})},l=function(t,n,a){return n.render&&(n.render=e.wrap(n.render,u)),n.remove&&(n.remove=e.wrap(n.remove,p)),t.call(this,n,a)},u=function(e){var t;return this.beforeRender&&this.beforeRender(),c(this),t=e.call(this),o(this),this.afterRender&&this.afterRender(),t},p=function(t){return e.invoke(a(this),"remove"),i(this),t.call(this)},b=function(e,t,n){var r=a(e);return delete r[t],n.call(this)},f=function(){this.constructor.extend=e.wrap(this.constructor.extend,l),this.render=e.wrap(this.render,u),this.remove=e.wrap(this.remove,p)};return f})},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},function(e,t,n){var a;a=function(){"use strict";return n(14)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e){function t(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(a(n.parts[o]))}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(a(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:s}}}}function n(e){for(var t=[],n={},a=0;a<e.length;a++){var r=e[a],i=r[0],o=r[1],s=r[2],c={css:o,media:s};n[i]?n[i].parts.push(c):t.push(n[i]={id:i,parts:[c]})}return t}function a(e){var t=document.createElement("style"),n=document.head||document.getElementsByTagName("head")[0];return t.type="text/css",n.appendChild(t),r(t,e),function(a){if(a){if(a.css===e.css&&a.media===e.media)return;r(t,e=a)}else n.removeChild(t)}}function r(e,t){var n=t.css,a=t.media;if(a&&e.setAttribute("media",a),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var i={};e.exports=function(e){var a=n(e);return t(a),function(e){for(var r=[],o=0;o<a.length;o++){var s=a[o],c=i[s.id];c.refs--,r.push(c)}if(e){var l=n(e);t(l)}for(var o=0;o<r.length;o++){var c=r[o];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,"body{background-image:linear-gradient(45deg,rgba(0,0,0,.05)25%,transparent 25%,transparent 75%,rgba(0,0,0,.05)75%,rgba(0,0,0,.05)),linear-gradient(45deg,rgba(0,0,0,.05)25%,transparent 25%,transparent 75%,rgba(0,0,0,.05)75%,rgba(0,0,0,.05));background-attachment:fixed;background-position:0 0,10px 10px;background-size:20px 20px}",""])},function(e,t,n){t=e.exports=n(4)(),t.push([e.id,'.bw-tabs{display:table}.bw-tabs--pusher{width:220px}.bw-tabs--navigation{position:fixed;top:0;bottom:0;z-index:4;width:220px;overflow:scroll;background-color:#333;box-shadow:1px 0 10px 0 rgba(0,0,0,.25)}.bw-tabs--header{display:block;height:60px;margin-bottom:30px;text-align:center}.bw-tabs--header.has-logo{background-color:#0072c6;background-repeat:no-repeat;background-position:center;background-size:contain}.bw-tabs--items{padding:0;margin:0;list-style:none}.bw-tabs--target{display:block;padding:15px;font-weight:700;color:#eee;text-decoration:none;text-transform:uppercase;transition-timing-function:ease-in-out;transition-duration:.2s;transition-property:color,background-color}.bw-tabs--target:hover,.bw-tabs--target:focus,.bw-tabs--target:active{color:#fff;text-decoration:none}.bw-tabs--item.is-active .bw-tabs--target{color:#fff;background-color:#262626}.bw-tabs--panels{display:table-cell;width:100%}.bw-tabs--panel{display:block;width:100%;min-height:100vh;*zoom:1}.bw-tabs--panel:before,.bw-tabs--panel:after{content:" ";display:table}.bw-tabs--panel:after{clear:both}.bw-tabs--panel.is-leaf{padding:20px 30px}.bw-tabs--panel.is-readable{background-color:#fff}.bw-tabs--panel .bw-tabs--navigation{z-index:3;background-color:#ddd}.bw-tabs--panel .bw-tabs--navigation .bw-tabs--target{color:#666}.bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:hover,.bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:focus,.bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:active{color:#404040}.bw-tabs--panel .bw-tabs--navigation .bw-tabs--item.is-active .bw-tabs--target{color:#404040;background-color:#c4c4c4}.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation{z-index:2;background-color:#eee}.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation .bw-tabs--target{color:#777}.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:hover,.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:focus,.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation .bw-tabs--target:active{color:#525252}.bw-tabs--panel .bw-tabs--panel .bw-tabs--navigation .bw-tabs--item.is-active .bw-tabs--target{color:#525252;background-color:#d4d4d4}',""])},function(module,exports,__webpack_require__){module.exports=function anonymous(locals,filters,escape,rethrow){function rethrow(e,t,n,a){var r=t.split("\n"),i=Math.max(a-3,0),o=Math.min(r.length,a+3),s=r.slice(i,o).map(function(e,t){var n=t+i+1;return(n==a?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=n,e.message=(n||"ejs")+":"+a+"\n"+s+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:'<TabsView key="tabs" />\n',filename:void 0};try{var buf=[];with(locals||{})!function(){buf.push('<TabsView key="tabs" />\n')}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}},function(module,exports,__webpack_require__){module.exports=function anonymous(locals,filters,escape,rethrow){function rethrow(e,t,n,a){var r=t.split("\n"),i=Math.max(a-3,0),o=Math.min(r.length,a+3),s=r.slice(i,o).map(function(e,t){var n=t+i+1;return(n==a?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=n,e.message=(n||"ejs")+":"+a+"\n"+s+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:'<ChildView key="view" />\n',filename:void 0};try{var buf=[];with(locals||{})!function(){buf.push('<ChildView key="view" />\n')}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}},function(module,exports,__webpack_require__){module.exports=function anonymous(locals,filters,escape,rethrow){function rethrow(e,t,n,a){var r=t.split("\n"),i=Math.max(a-3,0),o=Math.min(r.length,a+3),s=r.slice(i,o).map(function(e,t){var n=t+i+1;return(n==a?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=n,e.message=(n||"ejs")+":"+a+"\n"+s+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:'<a class="bw-tabs--target" href="#">\n  <%= name %>\n</a>\n',filename:void 0};try{var buf=[];with(locals||{})!function(){buf.push('<a class="bw-tabs--target" href="#">\n  ',escape((__stack.lineno=2,name)),"\n</a>\n")}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}},function(module,exports,__webpack_require__){module.exports=function anonymous(locals,filters,escape,rethrow){function rethrow(e,t,n,a){var r=t.split("\n"),i=Math.max(a-3,0),o=Math.min(r.length,a+3),s=r.slice(i,o).map(function(e,t){var n=t+i+1;return(n==a?" >> ":"    ")+n+"| "+e}).join("\n");throw e.path=n,e.message=(n||"ejs")+":"+a+"\n"+s+"\n\n"+e.message,e}escape=escape||function(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")};var __stack={lineno:1,input:'<div class="bw-tabs--pusher" />\n\n<nav class="bw-tabs--navigation">\n  <header class="bw-tabs--header <% if (logo != null) { %>has-logo<% } %>" style="<% if (logo != null) { %>background-image: url(\'<%= logo %>\');<% } %>" />\n\n  <ul class="bw-tabs--items">\n    <% _.each(tabs, function (tab) { %>\n      <TabView key="<%= tab %>" />\n    <% }); %>\n  </ul>\n</nav>\n\n<div class="bw-tabs--panels">\n  <PanelView key="<%= selection %>" />\n</div>\n',filename:void 0};try{var buf=[];with(locals||{})!function(){buf.push('<div class="bw-tabs--pusher" />\n\n<nav class="bw-tabs--navigation">\n  <header class="bw-tabs--header '),__stack.lineno=4,null!=logo&&(buf.push("has-logo"),__stack.lineno=4),buf.push('" style="'),__stack.lineno=4,null!=logo&&(buf.push("background-image: url('",escape((__stack.lineno=4,logo)),"');"),__stack.lineno=4),buf.push('" />\n\n  <ul class="bw-tabs--items">\n    '),__stack.lineno=7,_.each(tabs,function(e){buf.push('\n      <TabView key="',escape((__stack.lineno=8,e)),'" />\n    '),__stack.lineno=9}),buf.push('\n  </ul>\n</nav>\n\n<div class="bw-tabs--panels">\n  <PanelView key="',escape((__stack.lineno=14,selection)),'" />\n</div>\n')}();return buf.join("")}catch(err){rethrow(err,__stack.input,__stack.filename,__stack.lineno)}}},function(e,t,n){var a;a=function(){"use strict";n(25);var e=n(9),t=n(2),a=n(1),r=n(3),i=n(19),o=n(17),s=a.View.extend({className:"bw-app",template:e,views:{TabsView:"_getTabsView"},initialize:function(e){e=e||{},this.root=i.generateTabs(e.generator,e.contexts),this.logo=e.logo,this.router=new o({root:this.root})},start:function(){return a.history.start(),this},render:function(){return this.$el.html(this.template()),this},_getTabsView:function(){var e=this.root.get("view"),n=t.extend({logo:this.logo},this.root.get("args"));return new e(n)}});return r.call(s.prototype),s}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(1);return e.Model.extend({defaults:{leaf:!0,active:!1},url:function(){var e=null!=this.collection?this.collection.url():"tabs",t=e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id);return null!=this.id?t:e}})}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";return n(16)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(2),t=n(1),a=n(5);return t.Collection.extend({model:a,comparator:"order",initialize:function(e,t){this.parent=null!=t?t.parent:null,this.listenTo(this,"change:active",this._onChangeActive)},url:function(){return this.parent.url()},_onChangeActive:function(t,n,a){this.contains(t)&&n&&e.invoke(this.without(t),"set",{active:!1}),null!=this.parent&&this.parent.trigger("change:active",t,n,a)}})}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";return n(18)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(1);return e.Router.extend({routes:{"tabs/*path":"tab"},initialize:function(e){this.root=e.root,this.listenTo(this.root,"change:active",this._onChangeActive)},tab:function(e){var t=e.split("/"),n=this.root,a=null;do a=n.get("args").collection,n=a.get(t.shift()),null!=n&&n.set({active:!0});while(null!=n&&t.length>0)},_onChangeActive:function(e,t){t&&this.navigate(e.url())}})}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";return n(20)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(2),t=n(27),a=n(5),r=n(15),i=n(21),o=function(t,n){var o=new a({view:i}),l=new r(null,{parent:o});return l.add(e.map(n,function(e,n){return c(t,s(n,e))})),o.set({args:{collection:l}})},s=function(t,n){var a=e.map(n.keys(),function(e){return n(e)});return{name:t,cases:a}},c=function(n,o){var s=new a({id:t.slugify(o.name),name:o.name,order:o.order,view:o.view}),l=new r(null,{parent:s});return o.cases?(l.add(e.map(o.cases,function(t){return c(n,e.extend({view:o.view},t))})),s.set({leaf:!1,view:i,args:{collection:l}})):o.schema&&s.set({args:n.generate(o.schema)}),s};return{generateTabs:o}}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";return n(24)}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(10),t=n(1),a=n(3),r=t.View.extend({className:"bw-tabs--panel",template:e,views:{ChildView:"_getChildView"},render:function(){var e=this.getTemplateData();return this.$el.html(this.template(e)),this.$el.toggleClass("is-leaf",!!e.leaf),this},getTemplateData:function(){return null!=this.model?this.model.toJSON():{}},_getChildView:function(){if(null==this.model)return new t.View;var e=this.model.get("view"),n=this.model.get("args");return new e(n)}});return a.call(r.prototype),r}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";var e=n(11),t=n(1),a=t.View.extend({tagName:"li",className:"bw-tabs--item",template:e,events:{"click a":"_onClick"},initialize:function(){this.listenTo(this.model,"change:active",this.render)},render:function(){var e=this.getTemplateData();return this.$el.html(this.template(e)),this.$el.toggleClass("is-active",!!e.active),this},getTemplateData:function(){return this.model.toJSON()},_onClick:function(e){e.preventDefault(),this.model.set({active:!0})}});return a}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a;a=function(){"use strict";n(26);var e=n(12),t=n(1),a=n(3),r=n(23),i=n(22),o=t.View.extend({className:"bw-tabs",template:e,views:{TabView:"_getTabView",PanelView:"_getPanelView"},initialize:function(e){e=e||{},this.logo=e.logo,this.listenTo(this.collection,"change",this.render)},beforeRender:function(){this.scroll=this.$("> .bw-tabs--navigation").scrollTop()},render:function(){return this.$el.html(this.template(this.getTemplateData())),this},afterRender:function(){this.$("> .bw-tabs--navigation").scrollTop(this.scroll),delete this.scroll},getTemplateData:function(){var e=this.collection.findWhere({active:!0});return{logo:this.logo,tabs:this.collection.pluck("id"),selection:null!=e?e.get("id"):null}},_getTabView:function(e){var t=this.collection.get(e);return new r({model:t})},_getPanelView:function(e){var t=this.collection.get(e);return new i({model:t})}});return a.call(o.prototype),o}.call(t,n,t,e),!(void 0!==a&&(e.exports=a))},function(e,t,n){var a=n(7);"string"==typeof a&&(a=[[e.id,a,""]]);n(6)(a)},function(e,t,n){var a=n(8);"string"==typeof a&&(a=[[e.id,a,""]]);n(6)(a)},function(e){e.exports=__WEBPACK_EXTERNAL_MODULE_27__}])});