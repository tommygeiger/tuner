import { Box, Typography } from '@material-ui/core'
import logo from './assets/spotify_logo_black.png'
import './App.css'

function Title() {

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">

      <Box>
        <Typography variant="h2">
          Tuner
        </Typography>
        
        <Box m={-2}>
          <Typography variant="caption">
            a better playlist generator
          </Typography>
        </Box>
      </Box>
      
      <Box px={4} mt={3}>
        <Typography variant="subtitle2">
          for        
        </Typography>
      </Box>
      
      <Box mt={3}>
        <img src={logo} width={236} height={70} alt="spotify logo"/>
      </Box>
    </Box>
  )
}

export default Title;