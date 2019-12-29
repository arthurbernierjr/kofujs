import * as snabbdom from "snabbdom"
import classModule from "snabbdom/modules/class"
import eventModule from "snabbdom/modules/eventlisteners"
import propsModule from "snabbdom/modules/props"

patch = snabbdom.init ([classModule, eventModule, propsModule])

class Komponent
  constructor: (@props) ->
    @state = null
    @data = null

  setState: (nextState) ->
    @state = {@state..., nextState...}
    @prevNode = @currentNode
    @currentNode = this.render()
    patch(@prevNode, @currentNode)
    return

export { Komponent as default, patch}
