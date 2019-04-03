/**
 * Operations or async action creators
 */
import {addStation, removeLastStation} from './actions';

export const selectStation = station => {
  return (dispatch, getState) => {
    const routeArray = getState().routes.currentRoute

    if (station !== routeArray[routeArray.length - 1]) {
      return dispatch(addStation(station))
    } else {
      return dispatch(removeLastStation())
    }
  }
}
