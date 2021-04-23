import { useContext, useState } from 'react'
import { SearchContext } from './SearchContext'
import Button from '@material-ui/core/Button'
import Skeleton from '@material-ui/lab/Skeleton'
import PlaylistElement from './PlaylistElement'
import './App.css'

/*
 * Playlist.js fetches and renders the recommendations api query
 */
function Playlist() {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('=')[1]}`
  }

  const { params, setParams } = useContext(SearchContext)
  const [playlist, setPlaylist] = useState()
  const colors = ['#e3e3e3', '#ffffff']

  //Function to fetch recommendations via the api
  function fetchPlaylist() {
    console.log(params)
    if (params.seed_albums || params.seed_artists || params.seed_tracks) {

      //Build request from params
      const requestUri = `https://api.spotify.com/v1/recommendations?market=US` +
      `${params.seed_tracks ? `&seed_tracks=${params.seed_tracks}` : ''}` +
      `${params.seed_albums ? `&seed_albums=${params.seed_albums}` : ''}` +
      `${params.seed_artists ? `&seed_artists=${params.seed_artists}` : ''}` +
      `${params.acousticness ? `&target_acousticness=${params.acousticness}` : ''}` +
      `${params.danceability ? `&target_danceability=${params.danceability}` : ''}` +
      `${params.energy ? `&target_energy=${params.energy}` : ''}` +
      `${params.instumentalness ? `&target_instumentalness=${params.instumentalness}` : ''}` +
      `${params.liveness ? `&target_liveness=${params.liveness}` : ''}` +
      `${params.loudness ? `&target_loudness=${params.loudness}` : ''}` +
      `${params.popularity ? `&target_popularity=${params.popularity}` : ''}` +
      `${params.tempo ? `&target_tempo=${params.tempo}` : ''}` +
      `${params.valence ? `&target_valence=${params.valence}` : ''}`

      console.log(requestUri)

      fetch(requestUri, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            //This parses the returned json
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
    <div className="Playlist">

        <Button color="primary" variant="contained" onClick={fetchPlaylist}>
          Generate playlist
        </Button>

        { playlist ? (
          <div style={{marginTop:20}}>
          { playlist.map((option, index) => (
            <PlaylistElement track={option} key={option.id} color={colors[index % colors.length]}/>
          ))}
          </div>
        ) : (
          [...Array(10)].map(() => <Skeleton height={90} animation={false}/>)                
        )}
    </div>
  )
  
}

export default Playlist