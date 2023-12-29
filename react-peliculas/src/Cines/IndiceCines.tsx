import { Link } from "react-router-dom";

export default function IndiceCines(props: any) {
    return (
        <>
            <h3>Indice Cine</h3>
            <Link to="cines/create">Crear Cine</Link>
        </>
    )
}