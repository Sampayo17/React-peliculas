//import { useParams } from "react-router-dom"

import FormularioGenero from "./FormularioGenero";

export default function UpdateGenero() {

   // const { id }: any = useParams();
    return (
        <>
            <h3>Editar Genero</h3>
            
            <FormularioGenero modelo={{ nombre: 'Accion' }}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r, 100))
                    console.log(valores);
                }}
            />
        </>
    )
}