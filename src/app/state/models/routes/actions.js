import types from './types'

export const addStation = station => {
  return {
    type: types.ADD_STATION,
    payload: station,
  }
}

export const removeStation = stationIndex => {
  return {
    type: types.REMOVE_STATION,
    payload: stationIndex,
  }
}

export const removeLastStation = () => {
  return {
    type: types.REMOVE_LAST_STATION,
  }
}

export default {
  addStation,
  removeStation,
  removeLastStation,
}
