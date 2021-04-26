import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Playlist from './Playlist'
import Controls from './Controls'
import Title from './Title'
import { SearchContext, defaultParams } from './SearchContext'
import './App.css'

function Body() {

  //Check out the docs for State and Context to understand these bits
  //In a nutshell, variables from useState are persistent across DOM updates
  //Context variables are accessible in all children who call the useContext hook
  const [params, setParams] = useState(defaultParams)
  const value = { params, setParams }

  return (
      <div className="Body">
        <SearchContext.Provider value={value}>
          <Title />
          <SearchBar />
          <Controls />
          <Playlist />
        </SearchContext.Provider>
      </div>
  )
}

export default Body;