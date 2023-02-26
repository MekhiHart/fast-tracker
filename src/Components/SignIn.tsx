export default function SignIn(props:any){

    const {userId, handleUserId} = props
    

    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={(event) => props.handleSignIn(event, "hello")}>
                <input value={userId} type="text" onChange={(event) => handleUserId(event)}  ></input>
            </form>
        </>
        


    )
}