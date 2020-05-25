import * as rx from 'rxjs';

import map from 'lodash.map';

import filter from 'lodash.filter';

import reduce from 'lodash.reduce';

import jss from 'jss';

import preset from 'jss-preset-default';

import color from 'color';

import createStore from '../kofu-state/index.js'

export var fu = {
  map: map,
  filter: filter,
  reduce: reduce,
  css: jss,
  preset: preset,
  color: color
};

export var ko = {...rx, createStore};
