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
      <ParamSlider param="acousticness"/>
      <ParamSlider param="danceability"/>
      <ParamSlider param="energy"/>
      <ParamSlider param="instrumentalness"/>
      <ParamSlider param="liveness"/>
      <ParamSlider param="loudness"/>
      <ParamSlider param="popularity"/>
      <ParamSlider param="tempo"/>
      <ParamSlider param="valence"/>
    </div>
  )
}

export default Controls