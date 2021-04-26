import './App.css'
import { Link, Typography } from '@material-ui/core'

function Footer() {
  return( 
    <div className="Footer">
      <Typography>
          <Link style={{color:"black"}} href="https://github.com/tommygeiger/spotify-react-app">GitHub</Link>
          {" - "}
          <Link style={{color:"black"}} href="https://github.com/tommygeiger/spotify-react-app/blob/main/Cookies.md">Cookies</Link>
      </Typography>
    </div>
  )
}

export default Footer