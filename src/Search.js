import React, { useState } from 'react'
import { Autocomplete } from '@material-ui/lab'
import { TextField } from '@material-ui/core'

function Search() {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('=')[1]}`
  }

  console.log(document.cookie.split('=')[1])

  const [options, setOptions] = useState([])

  function updateOptions(event, value, reason) {
    console.log(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`)
    if (value && value!='') {
      fetch(`https://api.spotify.com/v1/search?q=${value.split(' ').join('%20')}&type=track&limit=5`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            console.log(result.tracks.items.map(track => ({title:track.name, artist:track.artists[0].name, explicit:track.explicit})))
            setOptions(result.tracks.items.map(track => ({
              title:track.name, 
              artist:track.artists[0].name, 
              img:track.album.images.slice(-1)[0].url,
              explicit:track.explicit
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
      <br/>
      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <React.Fragment>
            <img src={option.img} width={32} height={32}></img>
            &nbsp;
            {option.artist} - {option.title}
            &nbsp;
            {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
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