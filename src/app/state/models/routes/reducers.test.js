import routesReducer from './reducers'

const INITIAL_STATE = {
  isFetching: false,
  routes: []
}

describe('routesReducer', () => {

  it('should ', () => {
    expect(routesReducer(undefined, {})).toEqual(INITIAL_STATE)
  })
})
