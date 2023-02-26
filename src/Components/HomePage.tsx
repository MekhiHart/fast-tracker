import { Link } from "react-router-dom"
export default function HomePage(props:any){
    const {handleUserType} = props
    
    return(
        <div>
            <h2>Hello User!</h2>
            <h3>Are you a.... </h3>
            

            <div className="homepage--button--container">
                <button onClick={() => handleUserType("attendee")}><Link to="/SignIn">Attendee</Link></button>
                <button onClick={() => handleUserType("volunteer")}><Link to="/SignIn">Volunteer</Link></button>
            </div>
        </div>
    )

}