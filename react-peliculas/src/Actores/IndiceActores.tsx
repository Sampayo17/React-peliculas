import { Link } from "react-router-dom";

export default function IndiceActores(props: any) {
    return (
        <>
            <h3>Indice Actore</h3>
            <Link to="Actores/create">Crear Actore</Link>
        </>
    )
}