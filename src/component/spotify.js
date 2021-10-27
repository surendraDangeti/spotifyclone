export const authEndpoint = 'https://accounts.spotify.com/authorize'
const clientId = '42a258375034436b9a8f700971b372a8'
const redirectUri = 'http://localhost:3000/Home'
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
]

export const getTokenFromResponse = () =>
  window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      const parts = item.split('=')
      initial[parts[0]] = decodeURIComponent(parts[1])

      return initial
    }, {})

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`
