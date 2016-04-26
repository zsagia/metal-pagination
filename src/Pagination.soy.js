/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from Pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Pagination.
 * @public
 */

goog.module('Pagination.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'pagination' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('ul', null, null,
        'class', 'pagination pagination-content');
      if (opt_data.showControls == true) {
        var prevClasses__soy8 = 'pagination-control' + (! opt_data.circular && opt_data.page == 0 ? ' disabled' : '');
        $renderElement_({cssClass: prevClasses__soy8, content: opt_data.strings.prev, onClick: 'onClickControls'}, null, opt_ijData);
      }
      var iLimit13 = opt_data.total;
      for (var i13 = 0; i13 < iLimit13; i13++) {
        var itemClasses__soy14 = 'pagination-item' + (opt_data.page == i13 ? ' active' : '');
        $renderElement_({cssClass: itemClasses__soy14, content: opt_data.offset + i13 + 1, onClick: 'onClickItem'}, null, opt_ijData);
      }
      if (opt_data.showControls == true) {
        var nextClasses__soy21 = 'pagination-control' + (! opt_data.circular && opt_data.page == opt_data.total - 1 ? ' disabled' : '');
        $renderElement_({cssClass: nextClasses__soy21, content: opt_data.strings.next, onClick: 'onClickControls'}, null, opt_ijData);
      }
    ie_close('ul');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'Pagination.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderElement_(opt_data, opt_ignored, opt_ijData) {
  ie_open('li', null, null,
      'class', opt_data.cssClass ? opt_data.cssClass : '',
      'data-onclick', opt_data.onClick);
    ie_open('a', null, null,
        'href', '#');
      itext((goog.asserts.assert((opt_data.content) != null), opt_data.content));
    ie_close('a');
  ie_close('li');
}
exports.renderElement_ = $renderElement_;
if (goog.DEBUG) {
  $renderElement_.soyTemplateName = 'Pagination.renderElement_';
}

exports.render.params = ["offset","elementClasses","circular","page","strings","showControls","total"];
exports.render.types = {"offset":"any","elementClasses":"any","circular":"any","page":"any","strings":"any","showControls":"any","total":"any"};
exports.renderElement_.params = ["cssClass","content","onClick"];
exports.renderElement_.types = {"cssClass":"any","content":"any","onClick":"any"};
templates = exports;
return exports;

});

class Pagination extends Component {}
Soy.register(Pagination, templates);
export default templates;
export { Pagination, templates };
/* jshint ignore:end */