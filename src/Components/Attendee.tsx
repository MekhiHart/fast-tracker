import { QRCodeSVG } from "qrcode.react"
import {doc, onSnapshot} from 'firebase/firestore'
import { useEffect } from "react"
export default function Attendee(props:any){
    const {userData, db, setUserData} = props
    const {firstname,lastname, eventpoints,id} = userData

    const attendeeRef:any = doc(db, "attendees", id); 

    useEffect(() =>{
        onSnapshot(attendeeRef, (snapshot:any) =>{ // * a list of all attendees
          var attendeeStats:any = snapshot.data()
          setUserData({...attendeeStats, id:id})
          console.log("here")
        } )

    },[])

    const registerStatus = (
        <h2 className="attendee--status">Attendee has not attended</h2>
    )
    return(
        <>
            <h1>{firstname} {lastname}</h1>
           {userData.hasAttended && <h2>Event Points: {eventpoints}</h2>}
            {!userData.hasAttended && registerStatus }
            <div id="qr-code"/>
            <QRCodeSVG value={id}/>
        </>
    )
}