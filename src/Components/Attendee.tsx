import { QRCodeSVG } from "qrcode.react"
import {doc, onSnapshot} from 'firebase/firestore'
export default function Attendee(props:any){
    const {userData, db} = props
    const {firstname,lastname, eventpoints,id} = userData
    console.log("Attendee data: ", userData )

    const attendeeRef:any = doc(db, "attendees", id); 
    onSnapshot(attendeeRef, (snapshot:any) =>{ // * a list of all attendees
      var attendeeStats:any = snapshot.data()
      console.log("Attendee Stats: ", attendeeStats)
    } )

    return(
        <>
            <h1>{firstname} {lastname}</h1>
            <h2>Event Points: {eventpoints}</h2>
            <div id="qr-code"/>
            <QRCodeSVG value={id}/>
        </>
    )
}