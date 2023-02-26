import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Volunteer(props:any){

    const {handleQrScanner, isQrScannerOpen, db} = props
    const [scanner,setScanner] = useState(    new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250}},
      false
    ) )
      

    async function onScanSuccess(id:string) : Promise<void> {
        // close camera
        console.log("Pause Camera")
        scanner.pause()
        handleQrScanner()

        console.log("Talk to DB")

        const collectionName = "attendees"
        const docRef = doc(db, collectionName, id); 
        const docSnap = await getDoc(docRef);

        const priorData = await docSnap.data()
        // make priorData not undefined
        const newData = {
          ...priorData,
          hasAttended:true,
          eventpoints: priorData!.eventpoints += 5 
        }

        await updateDoc(docRef, newData);

        

        
        // make fetch request here
    }

    function turnOnScanner(){
      scanner.resume()
      handleQrScanner()
    }



    useEffect( () =>{
      scanner.render(onScanSuccess, () => {})

    },[])

    const {userData} = props
    const {firstname,lastname} = userData


    return(
        <>
            <h1>{firstname} {lastname}</h1>
            {isQrScannerOpen && <button onClick={turnOnScanner}>Scan Again?</button>}
        </>
    )
}