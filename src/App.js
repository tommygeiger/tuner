import Body from './Body'
import Header from './Header'
import LandingPage from './LandingPage'
import { accessToken } from './auth'
import './App.css'

/*
 * App.js is the outermost React compenent, responsible for rendering all other components
 */
function App() {

  //Get access token and save to cookie
  if (accessToken) {
    document.cookie = `access-token=${accessToken}; max-age=3600; path=/`;
    window.history.pushState(null, null, ' ');
  }
  console.log(document.cookie.split('=')[1]);
 
  return (
    <div className="App">

      <Header />

      { document.cookie &&
        <Body />
      }{ !document.cookie &&
        <LandingPage />
      }

    </div>
  )
}

export default App