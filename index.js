(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('snabbdom'), require('snabbdom/modules/class'), require('snabbdom/modules/eventlisteners'), require('snabbdom/modules/props'), require('rxjs'), require('lodash.map'), require('lodash.filter'), require('lodash.reduce'), require('jss'), require('jss-preset-default'), require('color'), require('snabbdom/h')) :
  typeof define === 'function' && define.amd ? define(['exports', 'snabbdom', 'snabbdom/modules/class', 'snabbdom/modules/eventlisteners', 'snabbdom/modules/props', 'rxjs', 'lodash.map', 'lodash.filter', 'lodash.reduce', 'jss', 'jss-preset-default', 'color', 'snabbdom/h'], factory) :
  (global = global || self, factory(global.myBundle = {}, global.snabbdom, global.classModule, global.eventModule, global.propsModule, global.rx, global.map, global.filter, global.reduce, global.jss, global.preset, global.color, global.h$1));
}(this, (function (exports, snabbdom, classModule, eventModule, propsModule, rx, map, filter, reduce, jss, preset, color, h$1) { 'use strict';

  classModule = classModule && classModule.hasOwnProperty('default') ? classModule['default'] : classModule;
  eventModule = eventModule && eventModule.hasOwnProperty('default') ? eventModule['default'] : eventModule;
  propsModule = propsModule && propsModule.hasOwnProperty('default') ? propsModule['default'] : propsModule;
  map = map && map.hasOwnProperty('default') ? map['default'] : map;
  filter = filter && filter.hasOwnProperty('default') ? filter['default'] : filter;
  reduce = reduce && reduce.hasOwnProperty('default') ? reduce['default'] : reduce;
  jss = jss && jss.hasOwnProperty('default') ? jss['default'] : jss;
  preset = preset && preset.hasOwnProperty('default') ? preset['default'] : preset;
  color = color && color.hasOwnProperty('default') ? color['default'] : color;
  h$1 = h$1 && h$1.hasOwnProperty('default') ? h$1['default'] : h$1;

  var fu = {
    map: map,
    filter: filter,
    reduce: reduce,
    css: jss,
    preset: preset,
    color: color
  };

  var ko = {...rx};

  exports.patch = snabbdom.init([classModule, eventModule, propsModule]);

  exports.Komponent = class Komponent {
    constructor(props) {
      this.props = props;
      this.state = null;
      this.data = null;
      this.setStyles = function(styleObject) {
        var stylesheet;
        fu.css.setup(fu.preset());
        stylesheet = fu.css.createStyleSheet(styleObject).attach();
        return stylesheet;
      };
    }

    setState(nextState) {
      this.state = {...this.state, ...nextState};
      this.prevNode = this.currentNode;
      this.currentNode = this.render();
      exports.patch(this.prevNode, this.currentNode);
    }

  };

  var attrMapper, reducer;

  // return object presented  spread into a new object  with the key as second arg set to true
  reducer = (acc, className) => {
    return {
      ...acc,
      [className]: true
    };
  };

  attrMapper = {
    className: (state, classNames) => {
      return {
        ...state,
        class: {...state.class, ...fu.reduce(classNames.split(" "), reducer, {})}
      };
    },
    onClick: (state, click) => {
      return {
        ...state,
        on: {...state.on, click}
      };
    },
    onKeyUp: (state, keyup) => {
      return {
        ...state,
        on: {...state.on, keyup}
      };
    }
  };

  var mappingAttributes = (attrs) => {
    return (acc, key) => {
      var nextState;
      nextState = attrMapper[key] ? attrMapper[key](acc, attrs[key]) : {
        ...acc,
        props: {
          ...acc.props,
          [key]: attrs[key]
        }
      };
      return nextState;
    };
  };

  var computeAttrs = (attrs) => {
    const computed = Object.keys(attrs).reduce(mappingAttributes(attrs), {
      class: {},
      on: {},
      props: {}
    });
    return computed
  };

  var createKomponent = (Komponent, attrs, children) => {
    var komponent, rendered, snabbdomChildren, stringChildren;
    snabbdomChildren = children.filter((child) => {
      return typeof child !== "string";
    });
    stringChildren = children.filter((child) => {
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

  var createElement = (tagName, attrs, ...children) => {
    if (typeof tagName === "function") {
      return createKomponent(tagName, attrs, children);
    } else {
      return h$1(tagName, computeAttrs(attrs || {}), children);
    }
  };

  global.h = createElement;

  global.fu = fu;

  global.ko = ko;

  global.Komponent = exports.Komponent;

  global.patch = exports.patch;

  exports.render = (RootKomponent, rootElement) => {
    return exports.patch(rootElement, RootKomponent);
  };
  global.render = exports.render;

  global.h = createElement;
  const h = createElement;

  exports.fu = fu;
  exports.h = h;
  exports.ko = ko;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
