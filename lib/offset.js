"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (el) {
  var docElem = void 0,
      win = void 0,
      rect = void 0,
      doc = void 0;

  if (!el) {
    return;
  }

  // Support: IE <=11 only
  // Running getBoundingClientRect on a
  // disconnected node in IE throws an error
  if (!el.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  rect = el.getBoundingClientRect();

  // Make sure element is not hidden (display: none)
  if (rect.width || rect.height) {
    doc = el.ownerDocument;
    win = getWindow(doc);
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }
  return rect;
};

/**
 * Gets a window from an element
 */
function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
} /**
   * 返回元素 offset
   * 不支持隐藏的元素
   * 参考 jQuery 实现
   * https://github.com/jquery/jquery/blob/master/src/offset.js
   * @param el
   * @returns {*}
   */


function isWindow(elem) {
  return elem != null && elem === elem.window;
}