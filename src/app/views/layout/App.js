import React from 'react'

import Station from '../components/Station/Station'
import './App.scss'

const App = () =>
  <div className="app">
    <Station name="London Bridge" />
    <Station name="Victoria" />
    <Station name="Cannon Street" />
    <Station name="Kings Cross St Pancras" />
    <Station name="Waterloo" />
    <Station name="Marylebone" />
    <Station name="Paddington" />
    <Station name="Euston" />
  </div>


export default App
