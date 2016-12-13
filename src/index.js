import scrollbarWidth from './scrollbarWidth';
import checkBodyScrollbar from './checkBodyScrollbar';
import zIndex from './zIndex';
import offset from './offset';
import position from './position';
import style from './style';
import {
  getWindow, isWindow, scrollTop, scrollLeft
} from './core';

/**
 * 整理一些常用操作 DOM 元素的公用 Api
 */
const prefectDom = {
  getWindow,
  isWindow,
  scrollTop,
  scrollLeft,
  scrollbarWidth,
  checkBodyScrollbar,
  zIndex,
  offset,
  position,
  style
};

module.exports = prefectDom;

module.exports.getWindow = getWindow;
module.exports.isWindow = isWindow;
module.exports.scrollTop = scrollTop;
module.exports.scrollLeft = scrollLeft;
module.exports.scrollbarWidth = scrollbarWidth;
module.exports.checkBodyScrollbar = checkBodyScrollbar;
module.exports.zIndex = zIndex;
module.exports.offset = offset;
module.exports.position = position;
module.exports.style = style;
