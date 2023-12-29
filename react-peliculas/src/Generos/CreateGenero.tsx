import FormularioGenero from "./FormularioGenero";

export default function CreateGenero() {
    //  const history= useHistory();
    return (
        <>
            <h3>Crear Genero</h3>

            <FormularioGenero modelo={{nombre: ''}} 
            onSubmit={async valores=> {await new Promise (r => setTimeout(r,100))
             console.log(valores);
            
            }}
            />
        </>
    )
}