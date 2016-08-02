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
function getStyles(element, property) {
  var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  if (property) {
    return styles.getPropertyValue(property) || styles[property];
  }
  return styles;
}