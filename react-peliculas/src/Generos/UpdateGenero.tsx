import { useParams } from "react-router-dom"

export default function UpdateGenero() {

    const { id }: any = useParams();
    return (
        <>
            <h3>Editar Genero</h3>
            <h4>El Id obtenido de la url es: {id}</h4>

        </>
    )
}