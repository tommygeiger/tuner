import React from 'react'

export const defaultParams = {
  seed_tracks:null,
  seed_artists:null,
  acousticness:null,
  danceability:null,
  energy:null,
  instrumentalness:null,
  // liveness:null,
  // loudness:null,
  popularity:null,
  // tempo:null,
  valence:null
}
export const SearchContext = React.createContext({
  params: defaultParams,
  setParams: () => {}
})
