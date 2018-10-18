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

    default:
      return state
  }
}

export default routesReducer
