import {
  Komponent,
  render
} from "../../lib/kofu-framework/index.js";

export class HelloWorld extends Komponent {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  komponentDidMount () {
    console.log('up')
  }
  handleClick() {
    console.log('hi')
  }

  render() {
    return <div className="container m-t"
    onClick={ this.handleClick }
    >
      <h1>Hello World</h1>
      </div>;
  }

};

render(<HelloWorld />, document.getElementById("app"));
