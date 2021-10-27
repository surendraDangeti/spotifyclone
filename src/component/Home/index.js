import Navbar from '../Navbar'
import ThisweekAlbums from '../ThisweekAlbums'
import FeaturedPlayList from '../FeaturedPlayList'
import BrowseCategories from '../BrowseCategories'

import './index.css'

const Home = props => {
  const {history} = props
  console.log(history.location.hash)
  const token = history.location.hash
  localStorage.setItem('Token', token)

  const logoutHandler = () => {
    localStorage.removeItem('Token')
    history.replace('/')
  }

  return (
    <div>
      <div className="main-container">
        <Navbar logoutHandler={logoutHandler} />
        <div className="content">
          <div className="nav-top-section">
            <img
              className="girl-image"
              src="https://res.cloudinary.com/dbmvwqck0/image/upload/v1635324127/msedge_ZpN8Q7lalX_dlemsw.png"
              alt="girl with headphones"
            />
            <div className="nav-top-section-content">
              <h1>Your favourite tunes</h1>
              <h1>All and all</h1>
            </div>
          </div>
          <div className="released-this-week">
            <p> RELEASED THIS WEEK</p>
            <ThisweekAlbums />
          </div>
          <div className="released-this-week">
            <p>Featured Playlists</p>
            <FeaturedPlayList />
          </div>
          <div className="released-this-week">
            <p>Featured Playlists</p>
            <BrowseCategories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
