import * as rx from 'rxjs'
import map from 'lodash.map'
import filter from 'lodash.filter'
import reduce from 'lodash.reduce'


export fu =
  map:map
  filter: filter
  reduce: reduce
export ko = {rx...}
