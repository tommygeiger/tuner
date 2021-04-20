import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

/*
index.js plugs App.js into index.html
*/
ReactDOM.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>,
  document.getElementById('root')
)