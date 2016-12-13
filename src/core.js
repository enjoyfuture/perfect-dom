/**
 * Gets a window from an element
 */
export function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
}

export function isWindow(elem) {
  return elem != null && elem === elem.window;
}

export function scrollTop(elem, val) {
  return scrollTopOrLeft(elem, val, 'top');
}

export function scrollLeft(elem, val) {
  return scrollTopOrLeft(elem, val, 'left');
}

function scrollTopOrLeft(elem, val, type) {
  const top = type === 'top';
  const win = getWindow(elem);

  if (val === undefined) {
    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset']
      : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
  }

  if (val === undefined) {
    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset'] : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
  }

  if (win) {
    win.scrollTo(
      !top ? val : window.pageXOffset,
      top ? val : window.pageYOffset
    );
  } else {
    elem[type === 'top' ? 'scrollTop' : 'scrollLeft'] = val;
  }
}
