import React from 'react'
import Search from './SearchBar'

function Body {

  

  handleSubmit(event) {
    event.preventDefault();

    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${document.cookie.split('=')[1]}`
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
          (error) => {
            console.error('Error:', error);
          }
        )
      }
  }

  render (
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
  )
}

export default Body;