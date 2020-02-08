import h from "snabbdom/h";

import {
  computeAttrs
} from "./attributes.js";

export var createKomponent = (Komponent, attrs, children) => {
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

export var createElement = (tagName, attrs, ...children) => {
  if (typeof tagName === "function") {
    return createKomponent(tagName, attrs, children);
  } else {
    return h(tagName, computeAttrs(attrs || {}), children);
  }
};
