import './App.css'
import { Link, Typography } from '@material-ui/core'

function Footer() {
  return( 
    <div className="Footer">
      <Typography>
          <Link style={{color:"black"}} href="https://github.com/tommygeiger/tuner">GitHub</Link>
          {" - "}
          <Link style={{color:"black"}} href="https://github.com/tommygeiger/tuner/blob/main/Cookies.md">Cookies</Link>
      </Typography>
    </div>
  )
}

export default Footer