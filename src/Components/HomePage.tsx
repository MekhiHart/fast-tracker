import { Link } from "react-router-dom"
export default function HomePage(props:any){
    const {handleUserType} = props
    
    return(
        <div>
            <h1>Hello User!</h1>
            <h2>Are you a.... </h2>
            

            <div className="homepage--choice">
                <button onClick={() => handleUserType("attendee")}><Link to="/SignIn">Attendee</Link></button>
                <button onClick={() => handleUserType("volunteer")}><Link to="/SignIn">Volunteer</Link></button>
            </div>
        </div>
    )

}