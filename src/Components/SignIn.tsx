export default function SignIn(props:any){

    const {userId, handleUserId, handleSignIn} = props
    

    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={(event) => handleSignIn(event, userId)}>
                <input value={userId} type="text" onChange={(event) => handleUserId(event)}  ></input>
            </form>
        </>
        


    )
}