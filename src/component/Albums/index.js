import './index.css'

const Albums = props => {
  const {eachAlbum} = props
  const {name, images} = eachAlbum

  return (
    <div className="album-cards">
      <img className="Album-images" src={images[0].url} alt="poster" />
      <ul className="album-items">
        <li className="album-name">{name}</li>
      </ul>
    </div>
  )
}

export default Albums
