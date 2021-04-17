import React from 'react'
import Search from './Search'

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      token: window.localStorage.getItem('token'),
      seed_track: '',
      min_pop: ''

    };
    
    //Bind
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${this.state.token}`
    }

    console.log(this.state.seed_track);

    if (this.state.seed_track && this.state.min_pop) {
      fetch(`https://api.spotify.com/v1/recommendations?market=US&seed_tracks=${this.state.seed_track}&min_popularity=${this.state.min_pop}`, { headers })
        .then(response => response.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result

            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
      }
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <Search />
        </div>
      )
    } else {
      return (
        <>
          <form onSubmit={this.handleSubmit}> 
            <label>
              Seed Track ID:
            <input 
              name="seed_track" 
              type="text" 
              value={this.state.seed_track}
              onChange={this.handleChange}  />
            </label>
            <br/>
            <label>
              Min Popularity (0-100):
            <input 
              name="min_pop" 
              type="text" 
              value={this.state.min_popularity}
              onChange={this.handleChange}  />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </form>
          <br/>

          //Print reponse from API call
          <ul>
            {items.tracks.map(track => (
              <li>
                {track.artists[0].name} - {track.name}
              </li>
            ))}
          </ul>
        </>
      );
    }
  }
}

export default Body;