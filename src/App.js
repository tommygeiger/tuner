import React, { Component } from "react";
import hash from "./Hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./Config";
import "./App.css"
import Recommender from "./Recommender"


class App extends Component {

  constructor() {
    super();
    this.state = {
      token: null,
    };

  }

  componentDidMount() {
    let _token = hash.access_token;

    if (_token) {
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <div className='App'>
        <br/>
        <h1>Tune<span style={{color: "mediumseagreen"}}>Spot</span></h1>
        <br/>
        {!this.state.token && (

        <a
          className="btn btn--loginApp-link"
          href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
        >
          Log In with Spotify
        </a>

        )}
        {this.state.token && (

        <Recommender dataFromParent = {this.state.token} />
                
        )}
      </div>
    );
  }
}

export default App;