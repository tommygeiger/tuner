const clientId = '3cf6931c4f974651b57c25157fe28427';
// const redirectUri = 'http://localhost:3000/';
const redirectUri = 'https://tommygeiger.com/spotify-react-app/';
const scopes = [
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private',
];

export const authEndpoint = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=false`;
export const accessToken = window.location.hash.split('&')[0].split('=')[1];
