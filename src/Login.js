import { authEndpoint } from './auth'
import Button from '@material-ui/core/Button'

function Login() {
  return( 
    <Button
      style={{textTransform: 'none'}}
      color="primary"
      variant="contained" 
      size="large"
      href={authEndpoint}>
      Connect to Spotify
    </Button>
  )
}

export default Login