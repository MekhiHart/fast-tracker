import { Html5QrcodeScanner } from "html5-qrcode"
export default function Volunteer(props:any){
    function onScanSuccess(result:string) {
        console.log("result: ", result)
    }

    function onScanFailure(error:any) :void {
      console.log("error")
    }

    let qrScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: {width: 250, height: 250}},
      false
    )
    
    qrScanner.render(onScanSuccess,onScanFailure)

    const {userData} = props
    const {firstname,lastname} = userData


    return(
        <>
            <h1>{firstname} {lastname}</h1>
            
        </>
    )
}