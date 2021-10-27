import {Component} from 'react'
import {getTokenFromResponse} from '../spotify'
import Albums from '../Albums'
import './index.css'

class BrowseCategories extends Component {
  state = {
    BrowseData: [],
  }

  componentDidMount() {
    this.getAlbums()
  }

  getAlbums = async () => {
    const Token = getTokenFromResponse()
    const apiUrl = `https://api.spotify.com/v1/browse/categories`
    const options = {
      headers: {
        Authorization: `Bearer ${Token.access_token}`,
      },
      method: 'GET',
    }
    console.log(Token.access_token)
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.categories.items.map(eachCategories => ({
        images: eachCategories.icons,
        name: eachCategories.name,
        id: eachCategories.id,
      }))
      this.setState({BrowseData: updatedData})
    }
  }

  render() {
    const {BrowseData} = this.state
    console.log(BrowseData)
    return (
      <div>
        <div className="albums-container">
          {BrowseData.map(eachAlbum => (
            <Albums eachAlbum={eachAlbum} key={eachAlbum.id} />
          ))}
        </div>
      </div>
    )
  }
}
export default BrowseCategories
