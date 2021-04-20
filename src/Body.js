import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Playlist from './Playlist'
import Controls from './Controls'
import { SearchContext } from './SearchContext'

function Body() {

  //Check out the docs for State and Context to understand these bits
  //In a nutshell, variables from useState are persistent across DOM updates
  //Context variables are accessible in all children who call the useContext hook
  const [params, setParams] = useState('')
  const value = { params, setParams }

  return (
      <SearchContext.Provider value={value}>
        <SearchBar />
        <Controls />
        <Playlist />
      </SearchContext.Provider>
  )
}

export default Body;