import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './app/state/store'
import App from './app/views/layout/App'
import './styles.scss'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'))
