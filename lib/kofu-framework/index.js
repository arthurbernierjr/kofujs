var render;

import Komponent, {
  patch
} from "./komponent.js";

import {
  createElement
} from "./element.js";

import {
  ko,
  fu
} from "../kofu-utilities/index.js";

const h = createElement;
global.h = h;

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
