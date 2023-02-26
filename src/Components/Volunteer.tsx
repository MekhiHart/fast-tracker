import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Volunteer(props:any){
  async function onScanSuccess(id:string) : Promise<void> {
    // close camera
    console.log("Pause Camera")
    scanner.pause()
    handleQrScanner()

    console.log("Current Mode: ", currentMode)

    const collectionName = "attendees"
    const docRef = doc(db, collectionName, id); 
    const docSnap = await getDoc(docRef);

    const priorData =  docSnap.data()
    let priorEventPoints = priorData!.eventpoints
    let priorAttendanceStatus = priorData!.hasAttended

    console.log("Before control flow")
    console.log("Current Mode: ", currentMode)

    if (currentMode === Modes.Register ){ // if current mode is register
      if (priorAttendanceStatus === false){
        const newData = {
          ...priorData,
          hasAttended:true,
          eventpoints: priorEventPoints += 1
        }
        await updateDoc(docRef, newData); // * marks attendee as present, and adds 1 point to attendee
        console.log("attendee registered!")
      }
      else{
        console.log("Attendee is already registered")
      }
    }


    else if (currentMode === Modes.Merch ){ // if current mode is merch
      if (priorEventPoints - 1 >= 0){ // if attendee has enough points to buy merch
        const newData = {
          ...priorData,
          eventpoints: priorEventPoints -= 1
        }
    
        await updateDoc(docRef, newData); // * subtracts 1 point from user
        console.log("merch purchased!")
      }
      else{
        console.log("not enough points")
      }
    }
    
      

    // make priorData not undefined
    // make fetch request here
  }

  function turnOnScanner(){
    scanner.resume()
    handleQrScanner()
  }

  function generateModeButtons(){
    return(
      <>
        <h3>Modes: </h3>
        <button className="mode--button" onClick={ () => {
          console.log("Change to register mode")
          setCurrentMode("Register")
          

        }}>Register</button>
        <button className="mode--button" onClick={() => {
          console.log("Change to merch mode")
          setCurrentMode("Merch")
          

        }}>Merch</button>
      </>
    )
  }



    const {handleQrScanner, isQrScannerOpen, db} = props
    const [scanner,setScanner] = useState(    new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250}},
      false
    ) )

    enum Modes {
      None = "None",
      Register = "Register",
      Merch = "Merch"
    }
    const [currentMode, setCurrentMode] = useState<string>(Modes.None) //type is Modes
    const {userData} = props
    const {firstname,lastname} = userData

    useEffect(() => {
      if (currentMode != Modes.None) scanner.render(onScanSuccess, () => {})
    
    }, [currentMode])




    return(
        <>
            {currentMode === Modes.None && generateModeButtons()}
            {currentMode != Modes.None && <h3>Current Mode: {currentMode}</h3>}
            {currentMode != Modes.None && <button onClick={() => setCurrentMode(currentMode===Modes.Merch ? Modes.Register : Modes.Merch)}>Change Mode</button>}
            <h1>{firstname} {lastname}</h1>
            {isQrScannerOpen && <button onClick={turnOnScanner}>Scan Again?</button>}
        </>
    )
}