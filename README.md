# Kofujs
KofuJS a slightly opinionated and elegant JS framework

## Live demo
  - [__Kofu Demo__](https://kofujs-demo.herokuapp.com/)

## Frontend Framework using

  - Virtual Dom with Snabbdom
  - Coffescript to force a Syntax
  - JSX
  - CSS-in-JS
  - Lodash
  - RXJS ( The whole point is out of box Observables from the ground up)

## Starter Kit Contains
	- Kofu
	- Vanilla Router
	- Webpack
	- BrowserSync
	- Babel
	- Gulp
	- Gulp-Coffee
	- Gulp-Nodemon
	- Express (need to set it up where you can add routers on the backend via middleware that is automatically added)


Goal is to be able to make it so it works like NUXT or NEXT out of the box with the Starter Kit but it could also be used as a mere SPA with using just Kofu.js and Vanilla Router
  todo : fork Vanilla Router and make Kofu Router

## Project Reason
    - Academic pursuit as a faculty member
    - Main purpose is to show students inner workings of FrontEnd / Full Satck Frameworks
    - Secondary Purpose is for usage with Freelance Projects
    - Third purpose is that maybe someone will love the project and use it for their own projects and hopefully help make it better
## Timeline to Beta
    - Hopeful Beta is May 22 2020
## Resources and Inspiration
  - Evan You and VueJS
  - Jose Santos Garcia Web Developer Starter kit
  - Marvin Frachet Create a FrontEnd Framework
  - Jafar Husain (ASYNC with RXJS)
  - Sean Larkin (Webpack)
  - Kyle Simpson (Getify)
  - Brad Traversy
  - Stephen Grider
  - Colt Steele
## todo
    - Create a build chain and dev server setup with Gulp, Webpack, Express, Nodemon and BrowserSync
    - Integrate JSS
    - Integrate Lodash Natively by exposing map, reduce and filter to every component
    - Set up RXJS
## Why?
  - There are things I love about React and Things I love about Vue and things I love about Nuxt.js
  - I want this project to be a true framework that includes a Router, State Management, Isomorphic Behavior, and Component Library out of the box
  - It also needs to be easy to use only what you need
  - I want to make this the framework you might turn to if you really want to build an application with rxjs
## What is in it Now
```JavaScript
  /*Komponent*/

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

```

```JavaScript

/* Simple JSS Integration */
import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'
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
    alert('On Click Works')
  }

  render() {
    jss.setup(preset())

    const styles = {
      mainHeader : {
        backgroundImage: `url('/assets/img/bg3.jpg')`
      }
    }
    const {classes} = jss.createStyleSheet(styles).attach()
    return (
      <div>
        <nav className="navbar navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg" color-on-scroll="100">
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="#">
              KofuJS </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation"
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
                <a href="#" className="nav-link">
                  <i className="material-icons">apps</i> Template
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={`page-header header-filter ${classes.mainHeader}`}
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

render(<HelloWorld />, document.getElementById("app"));

```
```
Coming Soon .kofu files with templates
```


# Getting started
  ``` bash
  git clone git@github.com:arthurbernierjr/kofujs.git
  cd kofujs
  ```
  ``` bash
  npm i -g gulp-cli
  ```
  ``` bash
  npm i
  ```
  ```bash
  npm run compile
  npm run watch
  ```
