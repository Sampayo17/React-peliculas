import { useHistory } from "react-router-dom"
import Button from "../peliculas/utils/Button"

export default function CreateGenero(){
    const history= useHistory();
    return(
        <>
        <h3>Crear Genero</h3>
        
        <Button onClick={() => history.push('/generos')}>Salvar</Button>
        </>
    )
}