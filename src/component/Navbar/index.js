import {
  BsHeadphones,
  BsSearch,
  BsFillHeartFill,
  BsFillPlayCircleFill,
} from 'react-icons/bs'

import {RiBarChartHorizontalFill} from 'react-icons/ri'

import './index.css'

const Navbar = props => {
  const {logoutHandler} = props

  const logout = () => {
    logoutHandler()
  }
  return (
    <div className="navbar">
      <div className="profile-container">
        <img
          className="profile"
          src="https://res.cloudinary.com/dbmvwqck0/image/upload/v1635327211/Pngtree_flat_people_profile_icon_png_6822469_qmnt4g.png"
          alt="profile"
        />
        <p className="profile-name">Surendra</p>
      </div>
      <div className="nav-items-container">
        <ul className="nav-list">
          <li className="list-item">
            <BsHeadphones className="icons" /> Discover
          </li>
          <li className="list-item">
            <BsSearch className="icons" /> search
          </li>
          <li className="list-item">
            <BsFillHeartFill className="icons" /> Favorite
          </li>
          <li className="list-item">
            {' '}
            <BsFillPlayCircleFill /> Playlists
          </li>
          <li className="list-item">
            {' '}
            <BsFillPlayCircleFill /> Charts
          </li>
        </ul>
      </div>
      <div className="nav-items-container-mobile">
        <BsHeadphones className="icons" />
        <BsSearch className="icons" />
        <BsFillHeartFill className="icons" />
        <BsFillPlayCircleFill className="icons" />
        <RiBarChartHorizontalFill className="icons" />
      </div>
      <button type="button" className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Navbar
