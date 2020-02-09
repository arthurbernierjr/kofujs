"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeAttrs = exports.mappingAttributes = void 0;

var _utilities = require("./utilities.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var attrMapper, reducer;

reducer = function reducer(acc, className) {
  return _defineProperty({ ...acc
  }, className, true);
};

attrMapper = {
  className: function className(state, classNames) {
    return { ...state,
      class: { ...state.class,
        ..._utilities.fu.reduce(classNames.split(" "), reducer, {})
      }
    };
  },
  onClick: function onClick(state, click) {
    return { ...state,
      on: { ...state.on,
        click: click
      }
    };
  },
  onKeyUp: function onKeyUp(state, keyup) {
    return { ...state,
      on: { ...state.on,
        keyup: keyup
      }
    };
  }
};

var mappingAttributes = function mappingAttributes(attrs) {
  return function (acc, key) {
    var nextState;
    nextState = attrMapper[key] ? attrMapper[key](acc, attrs[key]) : { ...acc,
      props: _defineProperty({ ...acc.props
      }, key, attrs[key])
    };
    return nextState;
  };
};

exports.mappingAttributes = mappingAttributes;

var computeAttrs = function computeAttrs(attrs) {
  return Object.keys(attrs).reduce(mappingAttributes(attrs), {
    class: {},
    on: {},
    props: {}
  });
};

exports.computeAttrs = computeAttrs;
