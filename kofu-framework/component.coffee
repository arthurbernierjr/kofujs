import { patch } from "./index.coffee"

export class Component
  constructor: (@props) ->
    @state = null
    @data = null

  setState: (nextState) ->
    @state = {@state..., nextState...}
    @prevNode = @currentNode
    @currentNode = this.render()
    patch(@prevNode, @currentNode)
    return
