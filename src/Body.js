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
  // const reducer = (state, action) => {
  //   return update(state, {
  //     [action.id]: {$set: action.payload}
  //   })
  // }
  const [params, setParams] = useState(defaultParams)

  return (
      <div className="Body"> 
        <SearchContext.Provider value={{params, setParams}}>
          <Title variant="icon"/>
          <SearchBar />
          <Controls />
          <Playlist />
        </SearchContext.Provider>
      </div>
  )
}

export default Body;