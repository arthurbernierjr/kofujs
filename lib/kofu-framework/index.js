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

global.h = createElement;

global.fu = fu;

global.ko = ko;

global.Komponent = Komponent;

global.patch = patch;

render = (RootKomponent, rootElement) => {
  return patch(rootElement, RootKomponent);
};
global.render = render 

export {
  Komponent,
  render,
  patch,
  ko,
  fu
};
