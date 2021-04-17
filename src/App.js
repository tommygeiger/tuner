import Body from './Body'
import Header from './Header'
import { accessToken } from './auth'
import './App.css'

function App() {

  //Get access token and save to localstorage
  if (accessToken) { 
    window.localStorage.setItem('token', accessToken);
    window.history.pushState(null, null, ' ');
  }
  console.log(window.localStorage.getItem('token'));
 
  return (
    <div className="App">
      <Header />
      { window.localStorage.getItem('token') &&
        <Body />
      }
    </div>
  )
}

export default App