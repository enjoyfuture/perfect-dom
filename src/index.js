import scrollbarWidth from './scrollbarWidth';
import checkBodyScrollbar from './checkBodyScrollbar';
import zIndex from './zIndex';
import offset from './offset';
import style from './style';

/**
 * 整理一些常用操作 DOM 元素的公用 Api
 */
const prefectDom = {
  scrollbarWidth,
  checkBodyScrollbar,
  zIndex,
  offset,
  style
};

module.exports = prefectDom;
