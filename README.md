# Tuner, a playlist generator for Spotify

A React app aimed to give users more control over the Spotify recommendation engine. Live at [tommygeiger.com/tuner](https://tommygeiger.com/tuner)

## Local Development

If you don't have Node js installed:
```
brew install node
```

Clone this repo (or fork):
```
git clone https://github.com/tommygeiger/tuner
cd spotify-react-app
```

Make sure `redirectUri` in `src/auth.js` is set to `http://localhost/3000/`

Install dependencies and start:
```
npm install
npm start
```

The app should be live at `http://localhost/3000`

## Building Your Own App

You'll need to create a Spotify app and add your app's credentials to the code. Go to the [Spotify for Developers Dashboard](https://developer.spotify.com/dashboard/) and create an app. Then add `http://localhost:3000/` (and your live site URI, if any) as a Redirect URI. Finally replace `clientId` in `auth.js` with your app's Client ID from the Spotify dashboard.
