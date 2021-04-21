import React, { useState, useContext } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'
import { SearchContext } from './SearchContext'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${document.cookie.split('=')[1]}`
}

/*
 * Search.js is responsible for the dynamic search bar
 */
function SearchBar() {

  const [options, setOptions] = useState([])
  const { params, setParams } = useContext(SearchContext);

  function updateOptions(event, value, reason) {
    console.log(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`)

    if (value && value!=='') {

      fetch(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            console.log(result.tracks.items.map(track => ({title:track.name, artist:track.artists[0].name, explicit:track.explicit})))
            setOptions(result.tracks.items.map(track => ({
              title:track.name, 
              artist:track.artists[0].name, 
              img:track.album.images.slice(-1)[0].url,
              explicit:track.explicit,
              id:track.id
            })))
          }
        )
        .catch(error => {
          console.error('Error:', error);
        });

    }
  }

  return (
      <div className="SearchBar">
        <Autocomplete
          options={options}
          getOptionLabel={(option) => `${option.artist} - ${option.title}`}
          renderOption={(option) => (
            <React.Fragment>
              <img src={option.img} width={32} height={32} alt="album artwork"></img>
              &nbsp;
              {option.artist} - {option.title}
              &nbsp;
              {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
            </React.Fragment>
          )}
          autoHighlight
          autoSelect
          onInputChange={updateOptions}
          filterOptions={(options, state) => options}
          getOptionSelected={(option, value) => option }
          renderInput={(params) => <TextField {...params} label="Search for Tracks" variant="outlined"/>}
          onChange={(event, value) => setParams(value.id)}
        />
      </div>
  )
}

export default SearchBar