import types from './types'

const INITIAL_STATE = {
  isFetching: false,
  routes: [],
  currentRoute: [],
}

/**
 * Stores individual routes
 */

const routesReducer = (state = INITIAL_STATE, action) => {

  switch(action.type) {

    case types.ADD_STATION:
      return {
        ...state,
        currentRoute: [...state.currentRoute, action.payload]
      }

    case types.REMOVE_STATION:
      const route = state.currentRoute

      // remove last item
      return {
        ...state,
        currentRoute: [...route.slice(0, route.length - 1)]
      }

    default:
      return state
  }
}

export default routesReducer
