import { useState  } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"


import './App.css'
import HomePage from './Components/HomePage'
import Volunteer from './Components/Volunteer'
import Attendee from './Components/Attendee'
import NavBar from "./Components/NavBar"
import SignIn from './Components/SignIn'
// * Firebase imports
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";


// const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// import { doc, getDoc } from "firebase/firestore";

/* 
Notes
Router encapsulate the entire page
! Link Component is the one that switches routes
! Switch Component encapsulates Route Component that is the React components
! Route Component encapsulates the Component you want to render; needs the "exact path=..." prop that link
*/

// * firebase global variables
const firebaseConfig = {
  apiKey: "AIzaSyA6Bo3VrpYbeYNmvJHFxcZbnrm0Ty8En7E",
  authDomain: "fast-tracker-backend.firebaseapp.com",
  projectId: "fast-tracker-backend",
  storageBucket: "fast-tracker-backend.appspot.com",
  messagingSenderId: "907729454881",
  appId: "1:907729454881:web:091210c74e97aaec796060",
  measurementId: "G-DVKXYRYKRP"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

function App() {
  const [userType,setUserType] = useState("")
  const [userId, setUserId] = useState("")

  function handleUserType(type:string):void{
    // either attendee or volunteer
    setUserType(type)
  }

  async function handleSignIn(event:any, id:string){
    event.preventDefault() // * prevents user submission when user clicks on sign in page
    // ! Handle fetch request

    const docRef = doc(db, "attendees", "8NYbFbt0oLMZqlGTvXN3"); 
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  function handleUserId(event:any){ // calls whenever user types in on submission box in SignIn component
    const {value} = event.target
    setUserId(value)
  }

  return (

    <Router>
      <div className="App">
        <NavBar/>

      
        <Switch>
          <Route exact path="/"> 
            <HomePage handleUserType={handleUserType}/>
          </Route>

          <Route exact path="/Attendee">
            <Attendee/>
          </Route>

          <Route exact path="/Volunteer">
            <Volunteer/>
          </Route>

          <Route exact path="/SignIn">
            <SignIn handleSignIn={handleSignIn} handleUserId={handleUserId} userId={userId}/>
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
