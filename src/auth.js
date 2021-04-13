import {createAuthContext} from 'react-pkce'

const clientId = "3cf6931c4f974651b57c25157fe28427";
const provider = "https://accounts.spotify.com";
 
const {AuthContext, Authenticated, useToken} = createAuthContext({
  clientId,
  provider,
  scopes: [ 'user-read-private' ]
})

export { AuthContext, Authenticated, useToken };