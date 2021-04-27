import ParamSlider from './ParamSlider'
import './App.css'


function Controls() {

  // acousticness:null,
  // danceability:null,
  // energy:null,
  // instumentalness:null,
  // liveness:null,
  // loudness:null,
  // popularity:null,
  // tempo:null,
  // valence:null

  return (
    <div className="Controls">
      <ParamSlider
        param="acousticness"
        description="How acoustic sounding a track is. Higher values mean 
        fewer electric instruments, like synthesizers and electric guitars."/>
      <ParamSlider 
        param="danceability"
        description="Does that song make you want to dance? If yes, it's danceable.
        Higher values mean more dancable tracks."/>
      <ParamSlider 
        param="energy"
        description="Some songs are perfect for pregames, while others are more
        suited for a dinner party. Higher values mean more energetic songs, while lower
        values means calmer ones."/>
      <ParamSlider 
        param="instrumentalness"
        description="High values for instrumentalness find songs with few vocals, while
        lower values mean songs with more vocals."/>
      {/* <ParamSlider param="liveness"/> */}
      {/* <ParamSlider param="loudness"/> */}
      <ParamSlider 
        param="popularity"
        description="An objective measurement of current popularity on Spotify. Use low values 
        to hipster-fy your playlist."/>
      {/* <ParamSlider param="tempo"/> */}
      <ParamSlider 
        param="valence"
        description="Valence measures how happy or sad a song is. High values
        mean happier songs, while low values mean sad boi songs."/>
    </div>
  )
}

export default Controls