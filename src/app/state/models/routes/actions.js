import types from './types'

const addStation = station => {
  return {
    type: types.ADD_STATION,
    payload: station,
  }
}

const removeStation = stationIndex => {
  return {
    type: types.REMOVE_STATION,
    payload: stationIndex,
  }
}

const removeLastStation = () => {
  return {
    type: types.REMOVE_LAST_STATION,
  }
}

export default {
  addStation,
  removeStation,
  removeLastStation,
}
