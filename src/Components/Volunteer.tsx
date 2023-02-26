import { Html5QrcodeScanner } from "html5-qrcode"
import { useEffect, useState } from "react"
export default function Volunteer(props:any){

    const {handleQrScanner, isQrScannerOpen} = props
    const [scanner,setScanner] = useState(    new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250}},
      false
    ) )

    function onScanSuccess(result:string) : void {
        console.log("result: ", result)
        // close camera
        scanner.pause()
        handleQrScanner()
        
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