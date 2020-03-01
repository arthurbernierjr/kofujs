var Komponent, patch;

import * as snabbdom from "snabbdom";

import classModule from "snabbdom/modules/class";

import eventModule from "snabbdom/modules/eventlisteners";

import propsModule from "snabbdom/modules/props";

import dataSetModule from "snabbdom/modules/dataset";

import attributeModule from "snabbdom/modules/attributes";

import {
  fu
} from "../kofu-utilities/index.js";

patch = snabbdom.init([classModule, eventModule, propsModule, attributeModule, dataSetModule]);

Komponent = class Komponent {
  constructor(props) {
    this.props = props;
    this['__prevState'] = null;
    this.state = null;
    this.data = null;
    this.name = null;
    this['__resurrecting'] = false;
    this.setStyles = function(styleObject) {
      var stylesheet;
      fu.css.setup(fu.preset());
      stylesheet = fu.css.createStyleSheet(styleObject).attach();
      return stylesheet;
    };
  }
  prevState () {
    return this['__prevState']
  }

  updateData (updatedData = {}) {
    this.data = {...this.data, ...updatedData}
    this.prevNode = this.currentNode;
    this.currentNode = this.present();
    patch(this.prevNode, this.currentNode);
  }
  rePresent (data = {}) {
    this.updateData(data)
    if(this.komponentResurrection && this['__resurrecting'] === false) {
      this['__resurrecting'] = true;
      const resurrect = () => {
        let count = 0;
        const once = () => {
          if (count === 0) {
            count++
          return this.komponentResurrection
          } else {
            return () => {}
          }

        }
        const runResurrectInner = once().bind(this)
        if (this['__resurrecting']) {

          return runResurrectInner
          } else {
          return () => {}
        }
      }
      const runResurrect = resurrect()
      runResurrect()
    }
    this['__resurrecting'] = false;
  }
  setState (nextState, keepLastState) {
    if (keepLastState){
    this['__prevState'] = {...this.state}
    }
    this.state = {...this.state, ...nextState};
    this.rePresent();
  }
  mergeStateWithData (mergingData = this.data) {
    this.state = { ...this.state, ...mergingData }
    this.prevNode = this.currentNode;
    this.currentNode = this.present();
    patch(this.prevNode, this.currentNode);
  }
  rewindState (items = 0) {
    const newPrevState = this.state
    if (typeof items === 'string'){
      if(this.prevState()){
        this.state = {...this.state, [items]: this['__prevState'][items]}
        this['__prevState'] = newPrevState
      }
    } else if(typeof items === 'number') {
        this.state = {...this.state, ...this['__prevState']}
        this['__prevState'] = newPrevState
    } else {
      var rewindState = {};
      for (var item of items) {
        rewindState[item] = this['__prevState'][item];
      }
      this.state = {...this.state, ...rewindState};
      this['__prevState'] = newPrevState
    }
    this.rePresent();
  }

};

export {
  Komponent as default,
  patch
};
