import React from 'react'
import {connect} from 'react-redux'
import {addStation} from '../../../state/models/routes/actions'

import './Station.scss'

const mapDispatchToProps = {
  addStation,
}

export const Station = ({name, addStation}) =>
  <div onClick={() => addStation(name)}
    className="station">{name}</div>

export default connect(null, mapDispatchToProps)(Station)
