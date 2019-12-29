var Komponent, patch;

import * as snabbdom from "snabbdom";

import classModule from "snabbdom/modules/class";

import eventModule from "snabbdom/modules/eventlisteners";

import propsModule from "snabbdom/modules/props";

patch = snabbdom.init([classModule, eventModule, propsModule]);

Komponent = class Komponent {
  constructor(props) {
    this.props = props;
    this.state = null;
    this.data = null;
  }

  setState(nextState) {
    this.state = {...this.state, ...nextState};
    this.prevNode = this.currentNode;
    this.currentNode = this.render();
    patch(this.prevNode, this.currentNode);
  }

};

export {
  Komponent as default,
  patch
};
