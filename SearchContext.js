import React from 'react'

export const defaultParams = {
  seed_tracks:[],
  seed_artists:[],
  seed_albums:[],
  acousticness:null,
  danceability:null,
  energy:null,
  instumentalness:null,
  liveness:null,
  loudness:null,
  popularity:null,
  tempo:null,
  valence:null
}
export const SearchContext = React.createContext({
  params: '',
  setParams: () => {}
})
