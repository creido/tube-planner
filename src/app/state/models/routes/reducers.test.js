import routesReducer from './reducers'
import types from './types'
import actions from './actions'

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

    const action = actions.addStation('Euston')
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

    const action = actions.removeLastStation()
    const result = routesReducer(startState, action)

    expect(result).toEqual(expectedState)
  })

  it('remove station by index', () => {
    const startState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Kings Cross St Pancras', 'Euston'],
    }

    const expectedState1 = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Euston'],
    }

    const action = actions.removeStation(1)
    const result = routesReducer(startState, action)
    expect(result).toEqual(expectedState1)


    const expectedState2 = {
      isFetching: false,
      routes: [],
      currentRoute: ['Kings Cross St Pancras', 'Euston'],
    }

    const action2 = actions.removeStation(0)
    const result2 = routesReducer(startState, action2)
    expect(result2).toEqual(expectedState2)

  })

})
