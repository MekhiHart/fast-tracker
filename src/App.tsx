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

// * Firebase imports for real time collection
import { getFirestore, doc, collection, query, where, orderBy, getDoc, onSnapshot } from 'firebase/firestore';
import { useDocumentData, useCollectionData, useCollection, } from 'react-firebase-hooks/firestore';




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

  // * States
  const [userType,setUserType] = useState("")
  const [userId, setUserId] = useState("")
  const [userData, setUserData] = useState({})
  const [isQrScannerOpen, setIsQrScannerOpen] = useState(false)
  // const [currentMode, setCurrentMode] = useState()
  // const [current]
  // let location = useLocation()

  // * enum for scanner modes

  
  // * handleUserId Props
  function handleUserId(event:any){ // calls whenever user types in on submission box in SignIn component
    const {value} = event.target
    setUserId(value)
  } //handleUserId
  
  
  // * HomePage Component Props
  function handleUserType(type:string):void{
    // either attendee or volunteer
    setUserType(type)
  } // handleUserType


  // * Volunteer Component Props
  function handleQrScanner(){
    console.log("Handle qrScanner")
    setIsQrScannerOpen(prevState => !prevState)
  } //handleQrScanner

// * Real time updates

  const attendeesRef = collection(db,"attendees")
  onSnapshot(attendeesRef, (snapshot) =>{
    let attendees:[Object] 
    snapshot.docs.forEach((doc) =>{
      console.log({...doc.data(), id:doc.id })
      // attendees.push()
    })

  } )


  return (

    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage handleUserType={handleUserType}/>} />
          <Route  path="/Attendee" element={<Attendee userData={userData} />}/>
          <Route path="/Volunteer" element={<Volunteer userData={userData} isQrScannerOpen={isQrScannerOpen} handleQrScanner={handleQrScanner} db={db}/>}/>
          <Route path="/SignIn" element={<SignIn 
                                          db={db} 
                                          handleUserId={handleUserId}
                                          userId={userId} 
                                          setUserData={setUserData}
                                          userType={userType}/>}
                                          />
        </Routes>
    </Router>
    <div id="reader"></div>
    </>

  )
}

export default App
