import reduce from 'lodash.reduce'

reducer = (acc, className) => { ...acc, [className]: true }

attrMapper =
  className: (state, classNames) => ({
      state...
      class: {
        state.class...
        reduce(classNames.split(" "), reducer, {})...
        }
      })
  onClick: (state, click) => ({state..., on: {state.on..., click}})
  onKeyUp: (state, keyup) => ({state..., on: {state.on..., keyup }})

export mappingAttributes = (attrs) => (acc, key) =>
  nextState = if attrMapper[key] then attrMapper[key](acc, attrs[key]) else ({ acc..., props: {acc.props..., [key]: attrs[key]}})
  return nextState

export computeAttrs = (attrs) =>
  Object.keys(attrs).reduce(mappingAttributes(attrs), { class: {}, on: {}, props: {}})
