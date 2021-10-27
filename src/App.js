import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Home" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
