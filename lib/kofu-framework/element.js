import h from "snabbdom/h";

import {
  computeAttrs
} from "./attributes.js";

export var createKomponent = (Komponent, attrs, children) => {
  var komponent, rendered, snabbdomChildren, stringChildren, arrayChildren, arrayChildrenStrings, arrayChildrenSnabbdom;

  snabbdomChildren = children.filter((child) => {
    return typeof child !== "string";
  });
  stringChildren = children.filter((child) => {
    return typeof child === "string";
  }).join("");
  arrayChildren = children.filter((child) =>  {
    return Array.isArray(child)
  })
  arrayChildrenStrings = arrayChildren.filter((child) => {
    return typeof child === "string"
  }).join("");
  arrayChildrenSnabbdom = arrayChildren.filter((child) =>  {
    return typeof child !== "string"
  });
  stringChildren = stringChildren + arrayChildrenStrings
  snabbdomChildren = [...snabbdomChildren, ...arrayChildrenSnabbdom]
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
export var mapElements = (array, callback) => {
  var nodeList = array.map(callback)
  var div = h('div')
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
  })
  children = children.filter((item)=> item !== null)
  div.children = children
  return div
}
