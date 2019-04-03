import React from 'react'

import Station from '../components/Station/Station'
import './App.scss'

import csv from 'csvtojson'

const csvFilePath = './city-stats.csv'


// // Async / await usage
// const jsonArray = await csv().fromFile(csvFilePath);

const App = () => {

  const foo = csv()
    .fromFile(csvFilePath)
    .then(jsonObj => {
      console.log(jsonObj)
      return jsonObj
      /**
       * [
       * 	{a:"1", b:"2", c:"3"},
       * 	{a:"4", b:"5". c:"6"}
       * ]
       */
    })

  // console.log(foo)

  return <div className="app">
      <Station name="London Bridge" />
      <Station name="Victoria" />
      <Station name="Cannon Street" />
      <Station name="Kings Cross St Pancras" />
      <Station name="Waterloo" />
      <Station name="Marylebone" />
      <Station name="Paddington" />
      <Station name="Euston" />
  </div>
}


export default App
