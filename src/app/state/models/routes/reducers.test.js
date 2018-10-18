import routesReducer from './reducers'
import types from './types'

const INITIAL_STATE = {
  isFetching: false,
  routes: [],
  currentRoute: [],
}

describe('routesReducer', () => {

  it('returns a state object', () => {
    expect(routesReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('adds a station', () => {
    const startState = {
      isFetching: false,
      routes: [],
      currentRoute: [],
    }

    const expectedState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Euston'],
    }

    const action = {type: types.ADD_STATION, payload: 'Euston'}
    const result = routesReducer(startState, action)

    expect(result).toEqual(expectedState)
  })

  it('remove the last station', () => {
    const startState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Kings Cross St Pancras'],
    }

    const expectedState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington'],
    }

    const action = {type: types.REMOVE_STATION}
    const result = routesReducer(startState, action)

    expect(result).toEqual(expectedState)
  })

})
