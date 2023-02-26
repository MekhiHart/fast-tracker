import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
            <h3 >Fast Tracker</h3>
            <Link to="/">Home Page</Link>
        </div>
        
    )
}