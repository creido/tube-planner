import React from 'react'
import {shallow} from 'enzyme'

import App from './App'

describe('App', () => {

  it('runs', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.length).toBe(1)
  })

})

