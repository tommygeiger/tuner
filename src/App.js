import Body from './Body'
import Header from './Header'
import { accessToken } from './auth'
import './App.css'

function App() {

  //Get access token and save to cookie
  if (accessToken) {
    document.cookie = `token=${accessToken}; max-age=3600; path=/`;
    window.history.pushState(null, null, ' ');
  }
  console.log(document.cookie.split('=')[1]);
 
  return (
    <div className="App">
      <Header />
      { document.cookie &&
        <Body />
      }
    </div>
  )
}

export default App