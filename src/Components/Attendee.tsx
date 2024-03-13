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
        <h2 className="attendee--status red">{firstname} has not attended</h2>
    )

    const attendedStatus = <h2 className="attendee--status green">{firstname} Registered!</h2>

    return(
        <>
           {userData.hasAttended && <h2>Event Points: {eventpoints}</h2>}
            <div id="qr-code"/>
            <QRCodeSVG value={id} className="qr--code"/>
            {!userData.hasAttended ? registerStatus : attendedStatus }

        </>
    )
}