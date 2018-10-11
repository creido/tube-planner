import React from 'react'
import {shallow} from 'enzyme'

import Station from './Station'

describe('Station', () => {
  let wrapper
  let stationName = 'testing'

  beforeEach(() => {
    wrapper = shallow(<Station name={stationName} />)
  })

  it('runs', () => {
    expect(wrapper.length).toBe(1)
  })

  it('has a station name', () => {

    expect(wrapper.text()).toBe(stationName)
  })

})
