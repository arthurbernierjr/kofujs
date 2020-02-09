"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Komponent", {
  enumerable: true,
  get: function get() {
    return _komponent.default;
  }
});
Object.defineProperty(exports, "patch", {
  enumerable: true,
  get: function get() {
    return _komponent.patch;
  }
});
Object.defineProperty(exports, "ko", {
  enumerable: true,
  get: function get() {
    return _utilities.ko;
  }
});
Object.defineProperty(exports, "fu", {
  enumerable: true,
  get: function get() {
    return _utilities.fu;
  }
});
exports.render = void 0;

var _komponent = _interopRequireWildcard(require("./komponent.js"));

var _element = require("./element.js");

var _utilities = require("./utilities.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var render;
exports.render = render;
global.h = _element.createElement;
global.fu = _utilities.fu;
global.ko = _utilities.ko;

exports.render = render = function render(RootKomponent, rootElement) {
  return (0, _komponent.patch)(rootElement, RootKomponent);
};
