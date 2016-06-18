'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var scrollDiv = document.createElement('div');
  Object.keys(scrollbarMeasureStyle).forEach(function (item) {
    scrollDiv.style[item] = scrollbarMeasureStyle[item];
  });
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

//计算滚动条的宽度
var scrollbarMeasureStyle = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

/**
 * 返回滚动条宽度
 * @returns {number}
 */