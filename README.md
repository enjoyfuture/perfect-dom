# perfect-dom

This is a common function to parse DOM.

## Install

```
npm install perfect-dom --save
```

## Usage

### es6 

#### load all api
```javascript
import perfectDom from 'perfect-dom';
perfectDom.scrollbarWidth();

```

#### load api by demand

```javascript
import scrollbarWidth from 'perfect-dom/lib/scrollbarWidth';
scrollbarWidth();

```

### es5 

#### load all api
```javascript
var perfectDom = require('perfect-dom');
perfectDom.scrollbarWidth();

```

#### load api by demand

```javascript
var scrollbarWidth = require('perfect-dom/lib/scrollbarWidth');
scrollbarWidth();

```

#### load in page
&lt;script src="perfect-dom/dist/perfect-dom.min.js"&gt;&lt;/script&gt;

```javascript
perfectDom.scrollbarWidth();
```

## Build

```
gulp build
```

## Docs

* checkBodyScrollbar  判断 body 滚动条是否显示
* scrollbarWidth 获取浏览器滚动条宽度
* zIndex  获取当前元素 zIndex
* offset  获取当前元素 offset
* getStyles 返回元素对应的 style 对象值，或某一属性值

## Issue

https://github.com/enjoyfuture/perfect-dom/issues

## Version

Please view [here](./VERSION.md)
