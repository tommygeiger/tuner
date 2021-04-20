import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import Login from './Login'
import './App.css'

/*
 * Header.js is responsible for displaying the header / navbar
 */
function Header() {

  const style = {
    background : '#2ab859'
  };

  return (
    <AppBar position="static" style={style}>
      <Toolbar>
        <Typography variant="h6">
          spotify-react-app
        </Typography>
        { !document.cookie &&
          <div className="Right">
            <Login />
          </div>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header;