import {accessUrl} from '../spotify'
import './index.css'

const Login = () => (
  <div className="loginContainer">
    <img
      className="spotify-image"
      src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
      alt="spotify"
    />
    <a className="login" href={accessUrl}>
      LOGIN TO SPOTIFY
    </a>
  </div>
)
export default Login
