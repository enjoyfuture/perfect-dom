'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWindow = getWindow;
exports.isWindow = isWindow;
exports.scrollTop = scrollTop;
exports.scrollLeft = scrollLeft;
/**
 * Gets a window from an element
 */
function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
}

function isWindow(elem) {
  return elem != null && elem === elem.window;
}

function scrollTop(elem, val) {
  return scrollTopOrLeft(elem, val, 'top');
}

function scrollLeft(elem, val) {
  return scrollTopOrLeft(elem, val, 'left');
}

function scrollTopOrLeft(elem, val, type) {
  var top = type === 'top';
  var win = getWindow(elem);

  if (val === undefined) {
    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset'] : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
  }

  if (val === undefined) {
    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset'] : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
  }

  if (win) {
    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
  } else {
    elem[type === 'top' ? 'scrollTop' : 'scrollLeft'] = val;
  }
}