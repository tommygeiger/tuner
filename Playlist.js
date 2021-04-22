import { useContext, useState } from 'react'
import { SearchContext } from './SearchContext'
import Button from '@material-ui/core/Button'

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Bearer ${document.cookie.split('=')[1]}`
}
const customStyle = {
  backgroundColor: "#2AB859",
  borderRadius: "25px",
  borderRadius: "25px",
  width: "50%",
  marginLeft: "auto",
  marginRight: "auto",
  borderStyle: "solid"


};
var a =0;
const rule = {
  width: "50%",
  color: "black",
  backgroundColor: "black"
};

const hStyle = {
  position: "relative",
  top: "10px",
  textAlign: "center",
  textColor: "#28df99",
  color: "black",
  fontSize: "25px"
};

const imgStyle={
 position: "relative",
 top: "10px",
 right: "10px",
 borderRadius: "50%"
};

const pStyle={
    color: "black",
    backgroundColor: "#fde8cd",
    height: "50px",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "25px",
    fontWeight: "bold",
    borderStyle: "solid"

};

function Playlist() {

  const { params, setParams } = useContext(SearchContext);
  const [playlist, setPlaylist] = useState()

  //Function to fetch recommendations via the api
  function fetchPlaylist() {
    if (params && params!=='') {

      fetch(`https://api.spotify.com/v1/recommendations?market=US&seed_tracks=${params}`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
              console.log(result);
            //This just parses the returned json
            setPlaylist(result.tracks.map(track => ({
            ext_url:track.artists[0].external_urls.spotify,
              title:track.name,
              artist:track.artists[0].name,
              img:track.album.images.slice(-1)[0].url,
              disc_num:track.disc_number,
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
        <Button variant="contained" onClick={fetchPlaylist}>
          Go
        </Button>


        {/* The playlist only gets rendered if it had been set */}
        { playlist &&
          <div style={customStyle}>
          <h1 style={hStyle}> Here is your playlist: </h1>
           <hr color="black" style={rule} />
          {playlist.map(option => (
            <p style={pStyle}>
            &nbsp;
            <a href ={option.ext_url} target="blank">
              <img src={option.img} style={imgStyle} width={32} height={32} alt="album artwork"></img>
              </a>
              &nbsp;
              {option.artist} - {option.title}

              &nbsp;
              {option.explicit && <span style={{fontSize:'.75em',fontWeight:'bold',color:'red'}}>E</span>}
            </p>
          ))}
          </div>
        }
    </div>
  )

}

export default Playlist
