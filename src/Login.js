import { authEndpoint } from './auth'
import Button from '@material-ui/core/Button'

function Login() {
  return( 
    <Button variant="contained" href={authEndpoint}>
      Connect to Spotify
    </Button>
  )
}

export default Login