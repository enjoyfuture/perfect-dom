'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (element) {
  var elem = element;
  var position = void 0;
  var value = void 0;

  while (elem && elem !== document) {
    // Ignore z-index if position is set to a value where z-index is ignored by the browser
    // This makes behavior of this function consistent across browsers
    // WebKit always returns auto if the element is positioned
    position = elem.style.position;
    if (position === 'absolute' || position === 'relative' || position === 'fixed') {
      // IE returns 0 when zIndex is not specified
      // other browsers return a string
      // we ignore the case of nested elements with an explicit value of 0
      value = parseInt(elem.style.zIndex, 10);
      if (!isNaN(value) && value !== 0) {
        return value;
      }
    }
    elem = elem.parentNode;
  }

  return 0;
};