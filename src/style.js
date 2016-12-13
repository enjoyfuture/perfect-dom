/**
 * getStyles
 * @param {type} element
 * @param {type} property
 * @returns {styles}
 */
export function getStyles(element, property, extra) {
  const styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  if (property) {
    const cssValue = styles.getPropertyValue(property) || styles[property];
    if (extra) {
      const num = parseFloat(cssValue);
      return extra === true || isFinite(num) ? num || 0 : cssValue;
    }
    return cssValue;
  }
  return styles;
}
