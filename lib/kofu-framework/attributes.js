var attrMapper, reducer;

import {
  fu
} from '../kofu-utilities/index.js';

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

export var mappingAttributes = (attrs) => {
  return (acc, key) => {
    const nextState = attrMapper[key] ?
    attrMapper[key](acc, attrs[key]) :
    key.includes('data', 0) ?
    {...acc, dataset: {...acc.dataset, [`${key.split("data-")[1]}`]: attrs[key] }} :
    {...acc, attrs: {...acc.attrs, [`${key}`]:attrs[key]}}
    return nextState;
  };
};

export var computeAttrs = (attrs) => {
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
    dataset: computed.dataset
   }
  return computedAttributesObject
};
