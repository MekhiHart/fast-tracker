export default function SignIn(props:any){

    return(
        <>
            <h1>Sign In</h1>
            <form onSubmit={(event) => props.handleSignIn(event, "hello")}>
                <input type="text"></input>
            </form>
        </>
        


    )
}