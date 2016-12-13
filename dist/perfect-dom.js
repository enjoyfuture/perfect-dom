(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["perfectDom"] = factory();
	else
		root["perfectDom"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getWindow = getWindow;
	exports.isWindow = isWindow;
	exports.scrollTop = scrollTop;
	exports.scrollLeft = scrollLeft;
	/**
	 * Gets a window from an element
	 */
	function getWindow(elem) {
	  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	function isWindow(elem) {
	  return elem != null && elem === elem.window;
	}

	function scrollTop(elem, val) {
	  return scrollTopOrLeft(elem, val, 'top');
	}

	function scrollLeft(elem, val) {
	  return scrollTopOrLeft(elem, val, 'left');
	}

	function scrollTopOrLeft(elem, val, type) {
	  var top = type === 'top';
	  var win = getWindow(elem);

	  if (val === undefined) {
	    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset'] : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
	  }

	  if (val === undefined) {
	    return win ? win[type === 'top' ? 'pageYOffset' : 'pageXOffset'] : elem[type === 'top' ? 'scrollTop' : 'scrollLeft'];
	  }

	  if (win) {
	    win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
	  } else {
	    elem[type === 'top' ? 'scrollTop' : 'scrollLeft'] = val;
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (el) {
	  var docElem = void 0,
	      win = void 0,
	      rect = void 0,
	      doc = void 0;

	  if (!el) {
	    return;
	  }

	  // Support: IE <=11 only
	  // Running getBoundingClientRect on a
	  // disconnected node in IE throws an error
	  if (!el.getClientRects().length) {
	    return { top: 0, left: 0 };
	  }

	  rect = el.getBoundingClientRect();

	  // Make sure element is not hidden (display: none)
	  if (rect.width || rect.height) {
	    doc = el.ownerDocument;
	    win = (0, _core.getWindow)(doc);
	    docElem = doc.documentElement;

	    return {
	      top: rect.top + win.pageYOffset - docElem.clientTop,
	      left: rect.left + win.pageXOffset - docElem.clientLeft
	    };
	  }
	  return rect;
	};

	var _core = __webpack_require__(1);

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  var fullWindowWidth = window.innerWidth;
	  if (!fullWindowWidth) {
	    // workaround for missing window.innerWidth in IE8
	    var documentElementRect = document.documentElement.getBoundingClientRect();
	    fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
	  }
	  return document.body.clientWidth < fullWindowWidth;
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _scrollbarWidth = __webpack_require__(7);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	var _checkBodyScrollbar = __webpack_require__(4);

	var _checkBodyScrollbar2 = _interopRequireDefault(_checkBodyScrollbar);

	var _zIndex = __webpack_require__(8);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	var _offset = __webpack_require__(2);

	var _offset2 = _interopRequireDefault(_offset);

	var _position = __webpack_require__(6);

	var _position2 = _interopRequireDefault(_position);

	var _style = __webpack_require__(3);

	var _style2 = _interopRequireDefault(_style);

	var _core = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 整理一些常用操作 DOM 元素的公用 Api
	 */
	var prefectDom = {
	  getWindow: _core.getWindow,
	  isWindow: _core.isWindow,
	  scrollTop: _core.scrollTop,
	  scrollLeft: _core.scrollLeft,
	  scrollbarWidth: _scrollbarWidth2.default,
	  checkBodyScrollbar: _checkBodyScrollbar2.default,
	  zIndex: _zIndex2.default,
	  offset: _offset2.default,
	  position: _position2.default,
	  style: _style2.default
	};

	module.exports = prefectDom;

	module.exports.getWindow = _core.getWindow;
	module.exports.isWindow = _core.isWindow;
	module.exports.scrollTop = _core.scrollTop;
	module.exports.scrollLeft = _core.scrollLeft;
	module.exports.scrollbarWidth = _scrollbarWidth2.default;
	module.exports.checkBodyScrollbar = _checkBodyScrollbar2.default;
	module.exports.zIndex = _zIndex2.default;
	module.exports.offset = _offset2.default;
	module.exports.position = _position2.default;
	module.exports.style = _style2.default;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = position;

	var _style = __webpack_require__(3);

	var _offset = __webpack_require__(2);

	var _offset2 = _interopRequireDefault(_offset);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function position(elem) {
	  if (!elem) {
	    return null;
	  }

	  var offsetParent = void 0,
	      offset = void 0,
	      parentOffset = { top: 0, left: 0 };

	  if ((0, _style.getStyles)(elem, 'position') === 'fixed') {
	    offset = elem.getBoundingClientRect();
	  } else {
	    offsetParent = getOffsetParent(elem);
	    offset = (0, _offset2.default)(elem);
	    if (elem.tagName.toLowerCase() !== 'html') {
	      parentOffset = (0, _offset2.default)(offsetParent);
	    }
	    parentOffset.top += (0, _style.getStyles)(offsetParent, 'borderTopWidth', true);
	    parentOffset.left += (0, _style.getStyles)(offsetParent, 'borderLeftWidth', true);
	  }

	  return {
	    top: offset.top - parentOffset.top - (0, _style.getStyles)(elem, 'marginTop', true),
	    left: offset.left - parentOffset.left - (0, _style.getStyles)(elem, 'marginLeft', true)
	  };
	}

	function getOffsetParent(elem) {
	  var offsetParent = elem.offsetParent;

	  while (offsetParent && elem.tagName.toLowerCase() !== 'html' && (0, _style.getStyles)(offsetParent, 'position') === 'static') {
	    offsetParent = offsetParent.offsetParent;
	  }
	  return offsetParent || document.documentElement;
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

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

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (element) {
	  var elem = element;
	  var position = void 0;
	  var value = void 0;

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
	};

/***/ }
/******/ ])
});
;