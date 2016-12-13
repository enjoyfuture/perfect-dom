import {getStyles} from './style';
import getOffset from './offset';

export default function position(elem) {
  if (!elem) {
    return null;
  }

  let offsetParent, offset,
    parentOffset = {top: 0, left: 0};

  if (getStyles(elem, 'position') === 'fixed') {
    offset = elem.getBoundingClientRect();
  } else {
    offsetParent = getOffsetParent(elem);
    offset = getOffset(elem);
    if (elem.tagName.toLowerCase() !== 'html') {
      parentOffset = getOffset(offsetParent);
    }
    parentOffset.top += getStyles(offsetParent, 'borderTopWidth', true);
    parentOffset.left += getStyles(offsetParent, 'borderLeftWidth', true);
  }

  return {
    top: offset.top - parentOffset.top - getStyles(elem, 'marginTop', true),
    left: offset.left - parentOffset.left - getStyles(elem, 'marginLeft', true)
  };
}

function getOffsetParent(elem) {
  let offsetParent = elem.offsetParent;

  while (offsetParent && elem.tagName.toLowerCase() !== 'html' &&
  getStyles(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }
  return offsetParent || document.documentElement;
}
