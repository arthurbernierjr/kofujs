import h from "snabbdom/h";
import { computeAttrs } from "./attributes.js";


export createComponent = (Component, attrs, children) =>
  snabbdomChildren = children.filter((child) => typeof child != "string")
  stringChildren = children.filter((child) => typeof child == "string").join("")
  component= new Component({
    children: stringChildren
    attrs...
    })
  rendered = component.render()
  rendered.children = rendered.children.concat(snabbdomChildren)

  component.currentNode = rendered
  if component.komponentDidMount then component.komponentDidMount()
  rendered

export createElement = (tagName, attrs, children...) =>
  if typeof tagName == "function" then createComponent(tagName, attrs, children) else h(tagName, computeAttrs(attrs|| {}), children)
