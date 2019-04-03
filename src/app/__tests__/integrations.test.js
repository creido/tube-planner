import React from 'react'
import {mount} from 'enzyme'
import {Provider} from 'react-redux'
// import thunk from 'redux-thunk'
// import configureStore from 'redux-mock-store'

import store from '../state/store'
import App from '../views/layout/App'

// const middlewares = [thunk]
// const mockStore = configureStore(middlewares)
// const INITIAL_STATE = {
//   routes: {
//     isFetching: false,
//     routes: [],
//     currentRoute: [],
//   }
// }

// const store = mockStore(INITIAL_STATE)

describe('App', () => {

  it('can store a list of selected stations', () => {
    let wrapper = mount(
      <Provider store={store}>
        <App/>
      </Provider>
    )

    wrapper.find('.station').first().simulate('click')
    wrapper.update()

    const currentRoute = store.getState().routes.currentRoute

    expect(currentRoute).toHaveLength(1)
    expect(typeof currentRoute[0]).toEqual('string')
    expect(currentRoute[0]).toBe('London Bridge')

    wrapper.unmount()
  })
})
