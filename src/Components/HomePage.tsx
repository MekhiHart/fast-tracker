import { Link } from "react-router-dom"
export default function HomePage(props:any){
    return(
        <div>
            <h1>Hello User!</h1>
            <h2>Are you </h2>

            <div className="homepage--choice">
                <button><Link to="attendee">Attendee</Link></button>
                <button ><Link to="volunteer">Volunteer</Link></button>
            </div>
        </div>
    )

}