import { Box, Typography } from '@material-ui/core'
import logo_text from './assets/logo_text.png'
import logo_icon from './assets/logo_icon.png'
import './App.css'

function Title(props) {

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center">

      <Box>
        <Typography variant="h2">
          Tuner
        </Typography>
        
        <Box m={-2}>
          <Typography variant="caption">
            a playlist generator
          </Typography>
        </Box>
      </Box>
      
      <Box px={3} mt={3}>
        <Typography variant="subtitle2">
          for        
        </Typography>
      </Box>
      
      <Box mt={3}>
        {props.variant==="text" ?
          <img src={logo_text} width={236} height={70} alt="spotify logo"/>
        :
          <img src={logo_icon} width={70} height={70} alt="spotify logo"/>
        }
      </Box>
    </Box>
  )
}

export default Title;