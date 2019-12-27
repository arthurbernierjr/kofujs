import { Component, render } from "../kofu-framework/index.coffee";

export class HelloWorld extends Component
  constructor: (props) ->
    super(props);

  render: ->
    return(
      <div className="container m-t">
      <h1>HelloWorld</h1>
      {this.props.children}
      </div>
      )

render(<HelloWorld />, document.getElementById("app"));
