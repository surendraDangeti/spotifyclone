import {Component} from 'react'
import {getTokenFromResponse} from '../spotify'
import Albums from '../Albums'
import './index.css'

class FeaturedPlayList extends Component {
  state = {
    FeaturedData: [],
  }

  componentDidMount() {
    this.getAlbums()
  }

  getAlbums = async () => {
    const Token = getTokenFromResponse()
    const apiUrl = `https://api.spotify.com/v1/browse/featured-playlists`
    const options = {
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.playlists.items.map(eachPlayList => ({
        images: eachPlayList.images,
        name: eachPlayList.name,
        id: eachPlayList.id,
      }))
      this.setState({FeaturedData: updatedData})
    }
  }

  render() {
    const {FeaturedData} = this.state
    return (
      <div>
        <div className="albums-container">
          {FeaturedData.map(eachAlbum => (
            <Albums eachAlbum={eachAlbum} key={eachAlbum.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default FeaturedPlayList
