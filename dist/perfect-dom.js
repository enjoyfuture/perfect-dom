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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
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
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _scrollbarWidth = __webpack_require__(3);

	var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

	var _checkBodyScrollbar = __webpack_require__(1);

	var _checkBodyScrollbar2 = _interopRequireDefault(_checkBodyScrollbar);

	var _zIndex = __webpack_require__(4);

	var _zIndex2 = _interopRequireDefault(_zIndex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * 整理一些常用操作 DOM 元素的公用 Api
	 */
	var prefectDom = {
	  scrollbarWidth: _scrollbarWidth2.default,
	  checkBodyScrollbar: _checkBodyScrollbar2.default,
	  zIndex: _zIndex2.default
	};

	module.exports = prefectDom;

/***/ },
/* 3 */
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
/* 4 */
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