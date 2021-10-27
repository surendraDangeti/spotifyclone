import {Component} from 'react'
import {getTokenFromResponse} from '../spotify'
import Albums from '../Albums'
import './index.css'

class ThisweekAlbums extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.getAlbums()
  }

  getAlbums = async () => {
    const Token = getTokenFromResponse()
    const apiUrl = `https://api.spotify.com/v1/browse/new-releases`
    const options = {
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.albums.items.map(eachAlbum => ({
        albumType: eachAlbum.album_type,
        images: eachAlbum.images,
        artists: eachAlbum.artists,
        externalUrls: eachAlbum.external_urls,
        href: eachAlbum.href,
        id: eachAlbum.id,
        name: eachAlbum.name,
        releaseDate: eachAlbum.releaseDate,
        releaseDatePrecision: eachAlbum.release_date_precision,
        totalTracks: eachAlbum.total_tracks,
        type: eachAlbum.type,
        uri: eachAlbum.uri,
      }))
      this.setState({data: updatedData})
    }
  }

  render() {
    const {data} = this.state
    return (
      <div>
        <div className="albums-container">
          {data.map(eachAlbum => (
            <Albums eachAlbum={eachAlbum} key={eachAlbum.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default ThisweekAlbums
