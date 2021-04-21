import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Playlist from './Playlist'
import Controls from './Controls'
import Sliders from './Sliders'

import { SearchContext } from './SearchContext'



function Body() {

  //Check out the docs for State and Context to understand these bits
  //In a nutshell, variables from useState are persistent across DOM updates
  //Context variables are accessible in all children who call the useContext hook
  const [params, setParams] = useState('')
  const value = { params, setParams }

  return (
    <div>
      
      <Sliders />
      <br/>
      <br/>
      <SearchContext.Provider value={value}>
        
        <SearchBar />
        <Controls />
        
{/*        
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <div class="slidecontainer">
          <input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input>
          <p>Value: <span id="demo"></span></p>
        </div>
    <br/>
    <br/>
    <script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

        slider.oninput = function() {
        output.innerHTML = this.value;
        }
        /</script> */}
      
        <Playlist />
        
      </SearchContext.Provider >
      
      </div>
  )
}


export default Body;