import h from "snabbdom/h";

import {
  computeAttrs
} from "./attributes.js";

export var createComponent = (Component, attrs, children) => {
  var component, rendered, snabbdomChildren, stringChildren;
  snabbdomChildren = children.filter((child) => {
    return typeof child !== "string";
  });
  stringChildren = children.filter((child) => {
    return typeof child === "string";
  }).join("");
  component = new Component({
    children: stringChildren,
    ...attrs
  });
  rendered = component.render();
  rendered.children = rendered.children.concat(snabbdomChildren);
  component.currentNode = rendered;
  if (component.komponentDidMount) {
    component.komponentDidMount();
  }
  return rendered;
};

export var createElement = (tagName, attrs, ...children) => {
  if (typeof tagName === "function") {
    return createComponent(tagName, attrs, children);
  } else {
    return h(tagName, computeAttrs(attrs || {}), children);
  }
};
