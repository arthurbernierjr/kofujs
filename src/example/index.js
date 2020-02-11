import {
  Komponent,
  render
} from "../../lib/kofu-framework/index.js";

const styles = {
  mainHeader : {
    backgroundImage: `url('/assets/img/bg3.jpg')`
  }
}
export class HelloWorld extends Komponent {
  constructor(props) {
    super(props);

    // Adds the created CSS Classes to this
    const { classes } = this.setStyles(styles)
    this.classes = classes
    // User this.state or this.data or both
    this.state = {
      reactive: " this data must be updated with SetState"
    }
    this.data = {
      unReactive: "this is available also and this will be just an object and previous data is unreachable after a key is overwritten"
    }
    // Bind Functions if necessary
    this.handleClick = this.handleClick.bind(this)
  }
  komponentGenesis(){
    console.log('genesis')
  }
  komponentDidMount () {
    console.log('mounted')
  }
  handleClick() {
    console.log('hi')
    alert('On Click Works')
  }
// This is where you put the jsx that you want to render or present it is called present so that it doesn't get confused by the render method outsided the class
  present() {
    console.log('rendering')
    return (
      <div>
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100">
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#">
              KofuJS </a>
              <button className="navbar-toggler" type="button"
              onClick={this.handleClick}
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="#" className="nav-link" onClick={this.handleClick}>
                  <i className="material-icons">apps</i> Template
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
      id="main"
        className={`page-header header-filter ${this.classes.mainHeader}`}
        data-parallax="true"
        >
        <div className="container">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto">
              <div className="brand text-center">
                <h1>Hello World</h1>
                <h3 className="title text-center">It works</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main main-raised">
        <div className="container">
          <div className="section text-center">
            <h2 className="title">KofuJS Concept Page</h2>
            <form>
            <input type="text" name="love" glass/>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://kofujs.io/">
                  Built with KofuJS
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright float-right">
            &copy;
              { new Date().getFullYear() }, made with <i className="material-icons">favorite</i> by{' '}
            <a href="https://arthurbernierjr.com/" target="blank">Arthur Bernier Jr.</a> for a better web.
          </div>
        </div>
        </footer>
      </div>
    )
  }

};

global.computed = HelloWorld

render(<HelloWorld />, document.getElementById("app"));
