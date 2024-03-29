import { useNavigate } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
export default function SignIn(props:any){

    async function handleSignIn(event:any, id:string, userType:string){
        event.preventDefault() // * prevents user submission when user clicks on sign in page
        // ! Handle fetch request
    
        // ! need to differentiate between type of user; remove hardcoded "attendees" --> "userType"
        const collectionName = userType === "attendee" ? "attendees" : "volunteers"
        const docRef = doc(db, collectionName, id); 
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) { // ! user sign in successful :)
          const data = docSnap.data()

          // ! Adds id if the userType is an attendee
          userType === "attendee" ? setUserData({
            ...data,
            id: id
          }) : setUserData(data)
          props.setNavBarTitle(<h2>Name: {data.firstname} {" " + data.lastname}</h2>)
          navigate(userType === "attendee" ? "/Attendee" : "/Volunteer")
          
        } else {// !user sign in unsuccessful :(
          // doc.data() will be undefined in this case
        }
      }
    const {userId, handleUserId,db, userType, setUserData} = props

    const navigate = useNavigate()
    return(
        <>
            <h2>Sign In</h2>
            <form onSubmit={(event) => handleSignIn(event, userId,userType)}>
                <input placeholder="Input ID" value={userId} type="text" onChange={(event) => handleUserId(event)}  ></input>
            </form>
            <button id="back--button" onClick={() => navigate("/")}>Back</button>
        </>
    )
}