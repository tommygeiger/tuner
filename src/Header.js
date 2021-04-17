import { AppBar, Toolbar, Typography, } from '@material-ui/core'
import Login from './Login'
import './App.css'

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
        { !window.localStorage.getItem('token') &&
          <div className="Right">
            <Login />
          </div>
        }
      </Toolbar>
    </AppBar>
  )
}

export default Header;