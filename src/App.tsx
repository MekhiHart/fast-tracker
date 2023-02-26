import { useState  } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"


import reactLogo from './assets/react.svg'
import './App.css'
import HomePage from './Components/HomePage'
import Volunteer from './Components/Volunteer'
import Attendee from './Components/Attendee'

/* 
Notes
Router encapsulate the entire page
! Link Component is the one that switches routes
! Switch Component encapsulates Route Component that is the React components
! Route Component encapsulates the Component you want to render; needs the "exact path=..." prop that link

*/

function App() {

  const [currentRoute, setCurrentRoute] = useState("/")

  return (
    <Router>
      <div className="App">
        <h1>Homepage</h1>
        <Link to="/">Home Page</Link>

        <Switch>
          <Route exact path="/"> 
            <HomePage/>
          </Route>

          <Route exact path="/Attendee">
            <Attendee/>
          </Route>

          <Route exact path="/Volunteer">
            <Volunteer/>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
