function validateAction(action){
  if( !action || typeof action !== 'object' || Array.isArray(action)){
    throw new Error("KofuJS Action must be an object")
  }
  if (action.type == null || typeof action.type === "undefined"){
    throw new Error("Action must have a type")
  }
}

export default function createStore({initialState, reducer}){
  const store = {}
  store.state = initialState
  store.listeners = []
  store.subscribe = (listener) => store.listeners.push(listener)
  store.dispatch = (action) => {
    validateAction(action)

    store.state = reducer(store.state, action)
    store.listeners.forEach(listener(action))
  }
  store.getState= () => store.state
}
