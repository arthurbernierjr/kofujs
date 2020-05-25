var kofuRouter
import Router from 'vanilla-router'
import {createElement} from '../kofu-framework/element.js'
import Komponent from '../kofu-framework/komponent.js'
import {render} from '../kofu-framework/index.js'

kofuRouter = function kofuRouter({routes, rootElementID, handle404, store, view}){
  const router = new Router({
    mode: 'history',
    page404: function (path) {
      if(handle404){
        handle404(path, view.lastView)
      }else {
        console.log('No View')
      }
    }
  })

  if (store){
    for(let route in routes ){
      let path = route.split('/')
      path.shift()
      path = path.join('/')
      router.add(path, ()=> {
        const View = routes[route]
        if (view.lastView === null){
          lastView = render(createElement(View,{store: store}), document.getElementById(rootElementID))
        } else {
          view.lastView = render(createElement(View,{store: store}), view.lastView)
        }
      })
    }
  } else {
    for(let route in routes ){
      let path = route.split('/')
      path.shift()
      path = path.join('/')
      router.add(path, ()=> {
        const View = routes[route]
        if (view.lastView === null){
          view.lastView = render(createElement(View), document.getElementById(rootElementID))
        } else {
          view.lastView = render(createElement(View), view.lastView)
        }
      })
    }
  }
  return router
}

export {
  kofuRouter as default
};
