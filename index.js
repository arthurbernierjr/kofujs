"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Komponent", {
  enumerable: true,
  get: function get() {
    return _index.Komponent;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _index.render;
  }
});
Object.defineProperty(exports, "patch", {
  enumerable: true,
  get: function get() {
    return _index.patch;
  }
});
Object.defineProperty(exports, "ko", {
  enumerable: true,
  get: function get() {
    return _index.ko;
  }
});
Object.defineProperty(exports, "fu", {
  enumerable: true,
  get: function get() {
    return _index.fu;
  }
});
exports.h = void 0;

var _index = require("./lib/kofu-framework/index.js");

var _element = require("./lib/kofu-framework/element.js");

global.h = _element.createElement;
var h = _element.createElement;
exports.h = h;
