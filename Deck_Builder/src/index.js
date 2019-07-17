import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import rootReducer from './reducers/index.js'
import App from './components/app.js'

const store = createStore(rootReducer)
console.log(store.getState())
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)