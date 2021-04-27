import Body from './Body'
import Footer from './Footer'
import LandingPage from './LandingPage'
import { accessToken } from './auth'
import './App.css'

function App() {

  //Get access token and save to cookie
  if (accessToken) {
    //These happen asynchronously!
    setAccessToken(accessToken)
    setUserId(accessToken)
  }

  function setAccessToken(token) {
    document.cookie = `access-token=${token}; max-age=3500; path=/`
    window.history.pushState(null, null, ' ')
  }

  function setUserId(token){
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    //Store User ID
    fetch("https://api.spotify.com/v1/me", { headers })
    .then(response => response.json())
    .then(
      (result) => {
        //Set cookie
        document.cookie = `user-id=${result.id}; max-age=3500; path=/`
      },
      (error) => { console.error('Error:', error) }
    )
  }

  console.log(document.cookie);
 
  return (
    <div className="App">

      { document.cookie ?
        <>
          <Body />
          <Footer />
        </>
      :
        <LandingPage />
      }
      
    </div>
  )
}

export default App