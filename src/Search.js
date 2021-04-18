import React, { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

function Search() {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('=')[1]}`
  }

  const [options, setOptions] = useState([])

  function updateOptions(event, value, reason) {
    console.log(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`)
    if (value && value!='') {
      fetch(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            console.log(result.tracks.items.map(track => ({title:track.name, artist:track.artists[0].name, img:track.album.images.slice(-1)[0].url})))
            setOptions(result.tracks.items.map(track => ({title:track.name, artist:track.artists[0].name, img:track.album.images.slice(-1)[0].url})))
          }
        )
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }

  return (
    <div className="SearchBar">
      <br/>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option}
        renderOption={(option) => (
          <React.Fragment>
            <img src={option.img}></img>
            {option.artist} - {option.title}
          </React.Fragment>
        )}
        fullWidth
        autoHighlight
        autoSelect
        onInputChange={updateOptions}
        filterOptions={(options, state) => options}
        getOptionSelected={(option, value) => option }
        renderInput={(params) => <TextField {...params} label="Search for Tracks" variant="outlined"/>}
      />
    </div>
  )
}

export default Search