// import configureStore from 'redux-mock-store'
import routesReducer from './reducers'
import types from './types'
import actions from './actions'

// const middlewares = []
// const mockStore = configureStore(middlewares)

const INITIAL_STATE = {
  isFetching: false,
  routes: [],
  currentRoute: [],
}

// const store = mockStore(INITIAL_STATE)

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

  it('removes the last station', () => {
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

  it('removes a station by a given index', () => {
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

// TODO - create mock
describe.skip('selectStation action creator', () => {
  let startState

  beforeEach(() => {
    startState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Kings Cross St Pancras', 'Euston'],
    }
  })

  it('adds a station to current route', () => {
    const expectedState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Kings Cross St Pancras', 'Euston', 'Marylebone'],
    }

    const action = actions.selectStation('Marylebone')
    const result = routesReducer(startState, action)

    setTimeout(() => {
      expect(result).toEqual(expectedState)
    }, 0)
  })

  it('removes the last station if it is selected twice', () => {

    const expectedState = {
      isFetching: false,
      routes: [],
      currentRoute: ['Paddington', 'Kings Cross St Pancras'],
    }

    const action = actions.selectStation('Euston')
    const result = routesReducer(startState, action)

    setTimeout(() => {
      expect(result).toEqual(expectedState)
    }, 0)
  })
})
