export default function Volunteer(props:any){
    const {userData} = props
    const {firstname,lastname} = userData
    return(
        <h1>{firstname} {lastname}</h1>
    )
}