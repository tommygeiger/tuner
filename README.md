# Tuner

A React.js app that gives users more control over the Spotify recommendation engine.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
Currently live (under construction) [here](https://tommygeiger.com/spotify-react-app).

## Local Development

This assumes you have node js installed, if you don't:
```
brew install node
```

Clone (or fork) this repo:
```
git clone https://github.com/tommygeiger/spotify-react-app
cd spotify-react-app
```

Make sure `redirectUri` in `src/auth.js` is set to `http://localhost/3000/`

Install dependencies and start:
```
npm install
npm start
```

The app should be live at `http://localhost/3000`
