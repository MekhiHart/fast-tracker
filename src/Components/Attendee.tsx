import { QRCodeSVG } from "qrcode.react"

export default function Attendee(props:any){
    const {userData} = props
    const {firstname,lastname, eventpoints,id} = userData
    console.log("Attendee data: ", userData )

    return(
        <>
            <h1>{firstname} {lastname}</h1>
            <h2>Event Points: {eventpoints}</h2>
            <div id="qr-code"/>
            <QRCodeSVG value={id}/>
        </>
    )
}