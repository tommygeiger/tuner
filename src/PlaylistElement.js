import { useState } from 'react'
import Button from '@material-ui/core/Button'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function PlaylistElement(props) {

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${document.cookie.split('=')[1]}`
  }

  const option = props.track
  const [deviceId, setDeviceId] = useState()
  

  function playTrack() {
    getDevice()
    
    const requestOptions = {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({ uris: [`spotify:track:${option.id}`] })
    };

    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, requestOptions)
        .then(response => response.json())
        .then(
          (result) => {},
          (error) => {
            console.error('Error:', error);
          }
        )
  }

  function getDevice() {
    fetch(`https://api.spotify.com/v1/me/player/devices`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            result.devices.forEach(device => {
              if(device.is_active) {
                setDeviceId(device.id)
              }
            })
          },
          (error) => {
            console.error('Error:', error);
          }
        )
  }

  return (
    <div key={option.title}>
      <img src={option.img} width={32} height={32} alt="album artwork"></img>
      &nbsp;
      {option.artist} - {option.title}
      &nbsp;
      {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
      &nbsp;

      <Button color="secondary" variant="contained" onClick={playTrack}>
        <PlayArrowIcon/>
      </Button>      
    </div>
  )
}

export default PlaylistElement