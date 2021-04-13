import React from 'react'
import {useToken} from './Auth'
export default () => {
  const { access_token } = useToken()

  return <>
    <h3>Protected</h3>
    <p>Here, we would load some data via a non-public api, or whatever.</p>
    <p>Token: {access_token}</p>
  </>
}