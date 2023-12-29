import { Redirect } from "react-router-dom";

export default function ReturnToLanding(){

    return(
        <Redirect to={{pathname:"/"}}></Redirect>
    )

}