"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStyles = getStyles;
/**
 * getStyles
 * @param {type} element
 * @param {type} property
 * @returns {styles}
 */
function getStyles(element, property, extra) {
  var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  if (property) {
    var cssValue = styles.getPropertyValue(property) || styles[property];
    if (extra) {
      var num = parseFloat(cssValue);
      return extra === true || isFinite(num) ? num || 0 : cssValue;
    }
    return cssValue;
  }
  return styles;
}