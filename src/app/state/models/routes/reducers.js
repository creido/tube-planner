import types from './types'

const INITIAL_STATE = {
  isFetching: false,
  routes: [],
  currentRoute: [],
}

// TODO: move into utils file
const immutableSplice = (arr, start, deleteCount, ...items) => {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}

/**
 * Stores individual routes
 */

const routesReducer = (state = INITIAL_STATE, action) => {
  const route = state.currentRoute

  switch(action.type) {

    case types.ADD_STATION:
      return {
        ...state,
        currentRoute: [...route, action.payload]
      }

    case types.REMOVE_LAST_STATION:
      return {
        ...state,
        currentRoute: [...route.slice(0, -1)]
      }

    case types.REMOVE_STATION:
      if (typeof action.payload !== 'number') return state

      return {
        ...state,
        currentRoute: immutableSplice(route, action.payload, 1)
      }

    default:
      return state
  }
}

export default routesReducer
