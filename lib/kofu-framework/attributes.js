var attrMapper, reducer;

import {
  fu
} from '../kofu-utilities/index.js';

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

export var mappingAttributes = (attrs) => {
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

export var computeAttrs = (attrs) => {
  return Object.keys(attrs).reduce(mappingAttributes(attrs), {
    class: {},
    on: {},
    props: {}
  });
};
