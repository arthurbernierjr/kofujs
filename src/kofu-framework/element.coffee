import h from "snabbdom/h";
import { computeAttrs } from "./attributes.js";


export createKomponent = (Komponent, attrs, children) =>
  snabbdomChildren = children.filter((child) => typeof child != "string")
  stringChildren = children.filter((child) => typeof child == "string").join("")
  komponent= new Komponent({
    children: stringChildren
    attrs...
    })
  if komponent.komponentGenesis then komponent.komponentGenesis()
  rendered = komponent.present()
  rendered.children = rendered.children.concat(snabbdomChildren)

  komponent.currentNode = rendered
  if komponent.komponentDidMount then komponent.komponentDidMount()
  rendered

export createElement = (tagName, attrs, children...) =>
  if typeof tagName == "function" then createKomponent(tagName, attrs, children) else h(tagName, computeAttrs(attrs|| {}), children)
