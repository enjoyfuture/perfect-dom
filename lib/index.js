'use strict';

var _scrollbarWidth = require('./scrollbarWidth');

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _checkBodyScrollbar = require('./checkBodyScrollbar');

var _checkBodyScrollbar2 = _interopRequireDefault(_checkBodyScrollbar);

var _zIndex = require('./zIndex');

var _zIndex2 = _interopRequireDefault(_zIndex);

var _offset = require('./offset');

var _offset2 = _interopRequireDefault(_offset);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 整理一些常用操作 DOM 元素的公用 Api
 */
var prefectDom = {
  scrollbarWidth: _scrollbarWidth2.default,
  checkBodyScrollbar: _checkBodyScrollbar2.default,
  zIndex: _zIndex2.default,
  offset: _offset2.default,
  style: _style2.default
};

module.exports = prefectDom;