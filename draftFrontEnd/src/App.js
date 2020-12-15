import './App.css';
import { BrowserRouter, Route } from "react-router-dom"
import React, {useState} from 'react'

import {Champions} from './Champions'
import {NavBar} from './NavBar'
import {DraftContainer} from './DraftContainer'
import { ChampionStats } from './ChampionStats';

function App() {
  const [selectedChampions, setSelectedChampions] = useState([])

  const addSelectedChampion = (champion) => {
    setSelectedChampions([...selectedChampions, champion])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/">
          <DraftContainer selectedChampions={selectedChampions} />
          <h2>Select Champion</h2>
          <div className='championContainer'>
            <Champions addSelectedChampion={addSelectedChampion} />
          </div>
        </Route>
        <Route exact path="/stats">
          <h2>Stats</h2>
          <div className='statsContainer'> 
            <ChampionStats />
          </div>
        </Route>
      </BrowserRouter>
      
      
    </div>
  )
}

export default App