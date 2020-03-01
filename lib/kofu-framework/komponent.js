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
  resurrect () {
    if(this['__resurrecting'] === true) {
      // if the component is set to resurrect
      if(this.komponentResurrection) {
        // if komponent resurrect is a thing
        // make a callResurrection closure
        var callResurrection = (times) => {
          // return a function definition that only runs once
          return () => {
            times ++;
            if (times < 1) {
            this.komponentResurrection()
            this['__resurrecting'] = false;
            }
          }
        }
      var runResurrection = callResurrection(0)
      // run resurrection should run once and only once
      runResurrection()
      // and only if we have turned resurrecting on
      }
    }
  }
  updateData (updatedData = {}) {
    this.data = {...this.data, ...updatedData}
    this.prevNode = this.currentNode;
    this.currentNode = this.present();
    patch(this.prevNode, this.currentNode);
  }
  rePresent (data = {}) {
    this.updateData(data)
    if(this.komponentResurrection) {
      this['__resurrecting'] = true;
      this.resurrect();
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
