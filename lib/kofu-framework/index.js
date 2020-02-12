var render;

import Komponent, {
  patch
} from "./komponent.js";

import {
  createElement,
  mapElements
} from "./element.js";

import {
  ko,
  fu
} from "../kofu-utilities/index.js";

const h = createElement;
global.h = h;
fu.mapElements = mapElements

render = (RootKomponent, rootElement) => {
  return patch(rootElement, RootKomponent);
};

export {
  Komponent,
  render,
  patch,
  ko,
  fu,
  h
};
