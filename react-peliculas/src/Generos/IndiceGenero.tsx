import { Link } from "react-router-dom";

export default function IndiceGenero(props:any){
    return(
        <>
        <h3>Indice Generos</h3>
        <Link to="generos/create">Crear Genero</Link>
        </>
    )
}