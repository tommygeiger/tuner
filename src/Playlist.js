import { useContext, useState } from 'react'
import { SearchContext } from './SearchContext'
import Button from '@material-ui/core/Button'
import PlaylistElement from './PlaylistElement'

/*
 * Playlist.js fetches and renders the recommendations api query
 */
function Playlist() {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('=')[1]}`
  }

  const { params, setParams } = useContext(SearchContext);
  const [playlist, setPlaylist] = useState()

  //Function to fetch recommendations via the api
  function fetchPlaylist() {
    if (params && params!=='') {

      fetch(`https://api.spotify.com/v1/recommendations?market=US&seed_tracks=${params}`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            //This just parses the returned json
            setPlaylist(result.tracks.map(track => ({
              title:track.name, 
              artist:track.artists[0].name, 
              img:track.album.images.slice(-1)[0].url,
              explicit:track.explicit,
              id:track.id
            })))
          },
          (error) => {
            console.error('Error:', error);
          }
        )

    }
  }

  return (
    <div>
        {/* This button calls the above function on click */}
        <Button color="primary" variant="contained" onClick={fetchPlaylist}>
          Go
        </Button>


        {/* The playlist only gets rendered if it had been set */}
        { playlist &&
          <div>
          { playlist.map(option => (
            <PlaylistElement track={option}/>
          ))}
          </div>
        }
    </div>
  )
  
}

export default Playlist