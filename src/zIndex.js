// 返回某一元素对应的 zIndex，参考 jQuery UI 实现，最新版的 jQuery UI 已去掉该方法了
export default function (element) {
  let elem = element;
  let position;
  let value;

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
}
