import  {   Komponent,
  render,
  patch,
  ko,
  fu
}
from './lib/kofu-framework/index.js'
import kofuRouter from './lib/kofu-router/index.js'
import {
  createElement
} from "./lib/kofu-framework/element.js";

global.h = createElement;
const h = createElement;
export {
  Komponent,
  render,
  patch,
  ko,
  fu,
  h,
  kofuRouter
};
