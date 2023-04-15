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
        } )

    },[])

    const registerStatus = (
        <h2 className="attendee--status">Attendee has not attended</h2>
    )
    return(
        <>
            <h2>Name: {firstname} {lastname}</h2>
           {userData.hasAttended && <h2>Event Points: {eventpoints}</h2>}
            {!userData.hasAttended && registerStatus }
            <div id="qr-code"/>
            <QRCodeSVG value={id} className="qr--code"/>
        </>
    )
}