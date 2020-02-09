"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createElement = exports.createKomponent = void 0;

var _h = _interopRequireDefault(require("snabbdom/h"));

var _attributes = require("./attributes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createKomponent = function createKomponent(Komponent, attrs, children) {
  var komponent, rendered, snabbdomChildren, stringChildren;
  snabbdomChildren = children.filter(function (child) {
    return typeof child !== "string";
  });
  stringChildren = children.filter(function (child) {
    return typeof child === "string";
  }).join("");
  komponent = new Komponent({
    children: stringChildren,
    ...attrs
  });

  if (komponent.komponentGenesis) {
    komponent.komponentGenesis();
  }

  rendered = komponent.present();
  rendered.children = rendered.children.concat(snabbdomChildren);
  komponent.currentNode = rendered;

  if (komponent.komponentDidMount) {
    komponent.komponentDidMount();
  }

  return rendered;
};

exports.createKomponent = createKomponent;

var createElement = function createElement(tagName, attrs) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (typeof tagName === "function") {
    return createKomponent(tagName, attrs, children);
  } else {
    return (0, _h.default)(tagName, (0, _attributes.computeAttrs)(attrs || {}), children);
  }
};

exports.createElement = createElement;
