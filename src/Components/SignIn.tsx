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
          setUserData(data)
          navigate(userType === "attendee" ? "/Attendee" : "/Volunteer")

          console.log("Sign In Successful")

        } else {// !user sign in unsuccessful :(
          // doc.data() will be undefined in this case
          console.log("Sign In Unsuccesful")
        }
      }
    const {userId, handleUserId,db, userDataState, userType} = props
    const [userData,setUserData] = userDataState

    const navigate = useNavigate()

    

    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={(event) => handleSignIn(event, userId,userType)}>
                <input value={userId} type="text" onChange={(event) => handleUserId(event)}  ></input>
            </form>
        </>
        


    )
}