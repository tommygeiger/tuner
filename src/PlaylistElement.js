import { useState } from 'react'
import Button from '@material-ui/core/Button'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Box from '@material-ui/core/Box'
import './App.css'
import { Typography } from '@material-ui/core';

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
    <div className="PlaylistElement" style={{backgroundColor:props.color, borderRadius:10, paddingLeft:10}}>
      <Box key={option.title} display="flex" style={{alignItems:"center"}}>

        <img src={option.img} width={40} height={40} alt="album artwork" style={{borderRadius:"50%"}}></img>
        <Typography>
          &nbsp;
          {option.artist} - {option.title}
          &nbsp;
          {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
        </Typography>
        <div className="Right">
        <Button
          onClick={playTrack}>
          <PlayCircleOutlineIcon/>
        </Button>
        </div>

      </Box>
    </div>
  )
}

export default PlaylistElement