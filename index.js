(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('snabbdom'), require('snabbdom/modules/class'), require('snabbdom/modules/eventlisteners'), require('snabbdom/modules/props'), require('snabbdom/modules/dataset'), require('snabbdom/modules/attributes'), require('rxjs'), require('lodash.map'), require('lodash.filter'), require('lodash.reduce'), require('jss'), require('jss-preset-default'), require('color'), require('snabbdom/h')) :
  typeof define === 'function' && define.amd ? define(['exports', 'snabbdom', 'snabbdom/modules/class', 'snabbdom/modules/eventlisteners', 'snabbdom/modules/props', 'snabbdom/modules/dataset', 'snabbdom/modules/attributes', 'rxjs', 'lodash.map', 'lodash.filter', 'lodash.reduce', 'jss', 'jss-preset-default', 'color', 'snabbdom/h'], factory) :
  (global = global || self, factory(global.myBundle = {}, global.snabbdom, global.classModule, global.eventModule, global.propsModule, global.dataSetModule, global.attributeModule, global.rx, global.map, global.filter, global.reduce, global.jss, global.preset, global.color, global.h$2));
}(this, (function (exports, snabbdom, classModule, eventModule, propsModule, dataSetModule, attributeModule, rx, map, filter, reduce, jss, preset, color, h$2) { 'use strict';

  classModule = classModule && classModule.hasOwnProperty('default') ? classModule['default'] : classModule;
  eventModule = eventModule && eventModule.hasOwnProperty('default') ? eventModule['default'] : eventModule;
  propsModule = propsModule && propsModule.hasOwnProperty('default') ? propsModule['default'] : propsModule;
  dataSetModule = dataSetModule && dataSetModule.hasOwnProperty('default') ? dataSetModule['default'] : dataSetModule;
  attributeModule = attributeModule && attributeModule.hasOwnProperty('default') ? attributeModule['default'] : attributeModule;
  map = map && map.hasOwnProperty('default') ? map['default'] : map;
  filter = filter && filter.hasOwnProperty('default') ? filter['default'] : filter;
  reduce = reduce && reduce.hasOwnProperty('default') ? reduce['default'] : reduce;
  jss = jss && jss.hasOwnProperty('default') ? jss['default'] : jss;
  preset = preset && preset.hasOwnProperty('default') ? preset['default'] : preset;
  color = color && color.hasOwnProperty('default') ? color['default'] : color;
  h$2 = h$2 && h$2.hasOwnProperty('default') ? h$2['default'] : h$2;

  var fu = {
    map: map,
    filter: filter,
    reduce: reduce,
    css: jss,
    preset: preset,
    color: color
  };

  var ko = {...rx};

  exports.patch = snabbdom.init([classModule, eventModule, propsModule, attributeModule, dataSetModule]);

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
      this.currentNode = this.present();
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
    },
    onBlur: (state, blur) => {
      return {
        ...state,
        on: {...state.on, blur}
      };
    },
    onChange: (state, change) => {
      return {
        ...state,
        on: {...state.on, change}
      };
    },
    onDrag: (state, drag) => {
      return {
        ...state,
        on: {...state.on, drag}
      };
    },
    onEnded: (state, ended ) => {
      return {
        ...state,
        on: {...state.on, ended }
      };
    },
    onError: (state, error) => {
      return {
        ...state,
        on: {...state.on, error}
      };
    },
    onFocus: (state, focus) => {
      return {
        ...state,
        on: {...state.on, focus}
      };
    },
    onScroll: (state, scroll) => {
      return {
        ...state,
        on: {...state.on, scroll }
      };
    },
    onSubmit: (state, submit) => {
      return {
        ...state,
        on: {...state.on, submit}
      };
    },
    onWheel: (state, wheel) => {
      return {
        ...state,
        on: {...state.on, wheel}
      };
    },
    onAbort: (state, abort) => {
      return {
        ...state,
        on: {...state.on, abort}
      };
    },
    onAfterPrint: (state, afterprint) => {
      return {
        ...state,
        on: {...state.on, afterprint}
      };
    },
    onAnimationEnd: (state, animationend) => {
      return {
        ...state,
        on: {...state.on, animationend}
      };
    },
    onAnimationIteration: (state, animationiteration) => {
      return {
        ...state,
        on: {...state.on, animationiteration}
      };
    },
    onAnimationStart: (state, animationstart) => {
      return {
        ...state,
        on: {...state.on, animationstart}
      };
    },
    onBeforePrint: (state, beforeprint) => {
      return {
        ...state,
        on: {...state.on, beforeprint}
      };
    },
    onBeforeUnload: (state, beforeunload) => {
      return {
        ...state,
        on: {...state.on, beforeunload}
      };
    },
    onCanPlay: (state, canplay) => {
      return {
        ...state,
        on: {...state.on, canPlay}
      };
    },
    onCanPlayThrough: (state, canplaythrough) => {
      return {
        ...state,
        on: {...state.on, canplaythrough}
      };
    }

  };

  var mappingAttributes = (attrs) => {
    return (acc, key) => {
      const nextState = attrMapper[key] ?
      attrMapper[key](acc, attrs[key]) :
      key.includes('data', 0) ?
      {...acc, dataset: {...acc.dataset, [`${key.split("data-")[1]}`]: attrs[key] }} :
      {...acc, attrs: {...acc.attrs, [`${key}`]:attrs[key]}};
      return nextState;
    };
  };

  var computeAttrs = (attrs) => {
    const computed = Object.keys(attrs).reduce(mappingAttributes(attrs), {
      class: {},
      on: {},
      attrs: {},
      dataset: {}
    });
    const computedAttributesObject = {
      class: computed.class,
      on: computed.on,
      attrs: computed.attrs,
      props: computed.attrs,
      dataset: computed.dataset
     };
    return computedAttributesObject
  };

  var createKomponent = (Komponent, attrs, children) => {
    var komponent, rendered, snabbdomChildren, stringChildren, arrayChildren, arrayChildrenStrings, arrayChildrenSnabbdom;

    snabbdomChildren = children.filter((child) => {
      return typeof child !== "string";
    });
    stringChildren = children.filter((child) => {
      return typeof child === "string";
    }).join("");
    arrayChildren = children.filter((child) =>  {
      return Array.isArray(child)
    });
    arrayChildrenStrings = arrayChildren.filter((child) => {
      return typeof child === "string"
    }).join("");
    arrayChildrenSnabbdom = arrayChildren.filter((child) =>  {
      return typeof child !== "string"
    });
    stringChildren = stringChildren + arrayChildrenStrings;
    snabbdomChildren = [...snabbdomChildren, ...arrayChildrenSnabbdom];
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
      return h$2(tagName, computeAttrs(attrs || {}), children);
    }
  };
  var mapElements = (array, callback) => {
    var nodeList = array.map(callback);
    var div = h$2('div');
    var children = nodeList.map((item)=>{
        if (item && item.sel !== undefined) {
          return  {
            text: item.text,
            sel: item.sel,
            data: item.data,
            children: item.children,
            elm: item.elm,
            key: item.key
          }
      } else if (item.text) {
        return  {
          text: item.text,
          sel: undefined,
          data: undefined,
          children: undefined,
          elm: undefined,
          key: undefined
        }
      }
      return null
    });
    children = children.filter((item)=> item !== null);
    div.children = children;
    return div
  };

  const h = createElement;
  global.h = h;
  fu.mapElements = mapElements;

  exports.render = (RootKomponent, rootElement) => {
    return exports.patch(rootElement, RootKomponent);
  };

  global.h = createElement;
  const h$1 = createElement;

  exports.fu = fu;
  exports.h = h$1;
  exports.ko = ko;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
