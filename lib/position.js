'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

var _style = require('./style');

var _offset = require('./offset');

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function position(elem) {
  if (!elem) {
    return null;
  }

  var offsetParent = void 0,
      offset = void 0,
      parentOffset = { top: 0, left: 0 };

  if ((0, _style.getStyles)(elem, 'position') === 'fixed') {
    offset = elem.getBoundingClientRect();
  } else {
    offsetParent = getOffsetParent(elem);
    offset = (0, _offset2.default)(elem);
    if (elem.tagName.toLowerCase() !== 'html') {
      parentOffset = (0, _offset2.default)(offsetParent);
    }
    parentOffset.top += (0, _style.getStyles)(offsetParent, 'borderTopWidth', true);
    parentOffset.left += (0, _style.getStyles)(offsetParent, 'borderLeftWidth', true);
  }

  return {
    top: offset.top - parentOffset.top - (0, _style.getStyles)(elem, 'marginTop', true),
    left: offset.left - parentOffset.left - (0, _style.getStyles)(elem, 'marginLeft', true)
  };
}

function getOffsetParent(elem) {
  var offsetParent = elem.offsetParent;

  while (offsetParent && elem.tagName.toLowerCase() !== 'html' && (0, _style.getStyles)(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }
  return offsetParent || document.documentElement;
}