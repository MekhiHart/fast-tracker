import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore";



export default function Volunteer(props:any){
  async function onScanSuccess(id:string) : Promise<void> {
    // close camera
    scanner.pause()
    handleQrScanner()

    const collectionName = "attendees"
    const docRef = doc(db, collectionName, id); 
    const docSnap = await getDoc(docRef);

    const priorData =  docSnap.data()
    let priorEventPoints = priorData!.eventpoints
    let priorAttendanceStatus = priorData!.hasAttended
    let message;

    if (currentMode === Modes.Register ){ //! if current mode is register
      if (priorAttendanceStatus === false){
        const newData = {
          ...priorData,
          hasAttended:true,
          eventpoints: priorEventPoints += 1
        }
        await updateDoc(docRef, newData); // * marks attendee as present, and adds 1 point to attendee
        message = "Attendee has been registered"
        
      }
      else{
        message = "Attendee has already been registered"
      }
    }


    else if (currentMode === Modes.Merch ){ // if current mode is merch
      if (priorEventPoints - 1 >= 0){ // if attendee has enough points to buy merch
        const newData = {
          ...priorData,
          eventpoints: priorEventPoints -= 1
        }
    
        await updateDoc(docRef, newData); // * subtracts 1 point from user
        message = "Attendee has been charged 1 point for merch"
      }
      else{ // * not enough merch points
        message = "Transaction could not be completed due to lack of points"
      }
    }
    else message = "An error has occurred"
    setResponseMessage(message)

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
          setCurrentMode("Register")


        }}>Register</button>
        <button className="mode--button" onClick={() => {
          setCurrentMode("Merch")


        }}>Merch</button>
      </>
    )
  }


    const scannerCofig = { fps: 10, qrbox: {width: 250, height: 250}, facingMode:{ exact: "environment"}}
    const {handleQrScanner, isQrScannerOpen, db, setIsQrScannerOpen} = props
    const [scanner,setScanner] = useState(    new Html5QrcodeScanner(
      "reader",
      scannerCofig,
      false
    ) )

  
    // scanner.
    // scanner.start({ facingMode: "user" }, config, onScanSuccess);


    enum Modes {
      None = "None",
      Register = "Register",
      Merch = "Merch"
    }
    const [currentMode, setCurrentMode] = useState<string>(Modes.None) //type is Modes
    const [responseMessage, setResponseMessage] = useState<string>("")
    

    useEffect(() => {
      if (currentMode != Modes.None) scanner.render(onScanSuccess, () => {})
    
    }, [currentMode])




    return(
        <>
            {currentMode === Modes.None && generateModeButtons()}
            {currentMode != Modes.None && <h3>Current Mode: <u>{currentMode}</u></h3>}
            {currentMode != Modes.None && <h3>{responseMessage}</h3> }
            {currentMode != Modes.None && <button onClick={() => {
              setIsQrScannerOpen(false)
              setCurrentMode(currentMode===Modes.Merch ? Modes.Register : Modes.Merch)
              setResponseMessage("")
              
            }}>Change Mode</button>}
            {isQrScannerOpen && <button onClick={() => {
              turnOnScanner()
              setResponseMessage("")
            }}>Scan Again?</button>}
        </>
    )
}