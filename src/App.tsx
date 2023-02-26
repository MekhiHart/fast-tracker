import { useState  } from 'react'
import {BrowserRouter as Router, Route, Routes, Link,useLocation} from "react-router-dom"


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
  const [userData, setUserData] = useState({})
  // let location = useLocation()


  // * Sign in props
  

  function handleUserType(type:string):void{
    // either attendee or volunteer
    setUserType(type)
  }



  function handleUserId(event:any){ // calls whenever user types in on submission box in SignIn component
    const {value} = event.target
    setUserId(value)
  }

  return (

    <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage handleUserType={handleUserType}/>} />
          <Route  path="/Attendee" element={<Attendee />}/>
          <Route path="/Volunteer" element={<Volunteer/>}/>
          <Route path="/SignIn" element={<SignIn 
                                          db={db} 
                                          handleUserId={handleUserId}
                                          userId={userId} 
                                          userDataState={[userData,setUserData]}
                                          userType={userType}/>}/>
        </Routes>
    </Router>
  )
}

export default App
