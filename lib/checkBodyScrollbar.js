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