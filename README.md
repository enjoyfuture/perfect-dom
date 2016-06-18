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

## Issue

https://github.com/enjoyfuture/perfect-dom/issues

## Version

Please view [here](./VERSION.md)
