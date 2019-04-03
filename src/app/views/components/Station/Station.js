import React from 'react'
import {connect} from 'react-redux'
import {selectStation} from '../../../state/models/routes/operations'

import './Station.scss'

const mapDispatchToProps = {
  selectStation,
}

export const Station = ({name, selectStation}) =>
  <div onClick={() => selectStation(name)}
    className="station">{name}</div>

export default connect(null, mapDispatchToProps)(Station)
