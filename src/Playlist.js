import { Fragment, useContext, useState } from 'react'
import { SearchContext } from './SearchContext'
import { Button, Box, IconButton, Tooltip, Snackbar } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import PlaylistElement from './PlaylistElement'
import SaveAltOutlinedIcon from '@material-ui/icons/SaveAltOutlined'
import CloseIcon from '@material-ui/icons/Close'
import './App.css'


const sayings = [
  "Girl put your records on",
  "Pump up the jam",
  "Fly me to the moon",
  "Hit me baby one more time",
  "Beat it",
  "Thank you, next",
  "Twist and shout",
  "Don't bring me down",
  "I need a one dance",
  "Kiss me through the phone",
  "Take a chance on me",
  "Drop it like it's hot",
  "Give it to me",
  "Let's get it started",
  "Come on Eileen",
  "I'm sorry Ms. Jackson",
  "Rock me like a wagon wheel",
  "Send me on my way",
  "Please don't stop the music",
  "Gimme gimme more",
  "Start me up",
  "Light my fire",
  "Go your own way",
  "Take a walk on the wild side",
  "Dream on",
  "Let's dance",
  "We will rock you",
  "Just what I needed",
  "Don't stop believing",
  "I wanna dance with somebody",
  "Girls just wanna have fun",
  "Get down on it",
  "Voulez vous"
]

/*
 * Playlist.js fetches and renders the recommendations api query
 */
function Playlist() {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('access-token=')[1].split(';')[0]}`
  }

  const { params } = useContext(SearchContext)
  const [playlist, setPlaylist] = useState()
  const [buttonText, setButtonText] = useState(sayings[Math.floor(Math.random() * sayings.length)])
  const colors = ['#e6e6e6a0', '#ffffff00']
  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //Function to fetch recommendations via the api
  function fetchPlaylist() {

    // console.log(params)

    setButtonText(sayings[Math.floor(Math.random() * sayings.length)])
    
    if (params.seed_albums || params.seed_artists || params.seed_tracks) {
      //Build request from params
      const requestUri = `https://api.spotify.com/v1/recommendations?market=US` +
      `${params.seed_tracks ? `&seed_tracks=${params.seed_tracks}` : ''}` +
      `${params.seed_artists ? `&seed_artists=${params.seed_artists}` : ''}` +
      `${params.acousticness ? `&target_acousticness=${params.acousticness}` : ''}` +
      `${params.danceability ? `&target_danceability=${params.danceability}` : ''}` +
      `${params.energy ? `&target_energy=${params.energy}` : ''}` +
      `${params.popularity ? `&target_popularity=${params.popularity}` : ''}` +
      `${params.valence ? `&target_valence=${params.valence}` : ''}` +
      `${params.instrumentalness ? `&target_instrumentalness=${params.instrumentalness}` : ''}`

      // console.log(params)
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


  //Save the playlist to users spotify account
  function savePlaylist() {

    const options = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        "name": "New Tuner Playlist",
        "description": "tommygeiger.com/tuner"
      })
    }
    //Create playlist
    fetch(`https://api.spotify.com/v1/users/${document.cookie.split('user-id=')[1].split(';')[0]}/playlists`, options)
        .then(response => response.json())
        .then(
          (result) => {
            options.body = JSON.stringify({
              uris:
              playlist.map(track => (
              `spotify:track:${track.id}`
              ))
            })

            // console.log(options)
            fetch(`https://api.spotify.com/v1/playlists/${result.id}/tracks`, options)
              .then(response => response.json())
              .then(
                (snapshot) => {
                  setOpen(true)
                },
                (error) => {
                  console.error('Error:', error);
                }
              )
              
          },
          (error) => {
            console.error('Error:', error);
          }
        )
  }

  return (
      <div className="Playlist">

          <Box display="flex" alignItems="center">
            <div className="Center">
              <Button
                style={{textTransform: 'capitalize'}}
                color="primary" 
                variant="contained"
                disabled={!(params.seed_artists || params.seed_tracks)}
                onClick={fetchPlaylist} >
                  {buttonText}
              </Button>
            </div>

            <div className="Right">
              <Tooltip
                arrow
                title="Save playlist to Spotify"
                placement="left"
                >
                <span>
                  <IconButton
                    onClick={savePlaylist}
                    disabled={!playlist}>
                    <SaveAltOutlinedIcon style={{height:'1.25em', width:'1.25em'}} />
                  </IconButton>
                </span>
              </Tooltip>
            </div>
          </Box>

          { playlist ? (
            <div style={{marginTop:20}}>
            { playlist.map((track, index) => (
              <PlaylistElement track={track} key={track.id} color={colors[index % colors.length]}/>
            ))}
            </div>
          ) : (
            [...Array(10)].map((elem,index) => <Skeleton key={index} height={90} animation={false}/>)                
          )}

          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center'
            }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Playlist created!"
            action={
              <Fragment>
                <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Fragment>
            }
            />

      </div>
  )
  
}

export default Playlist
