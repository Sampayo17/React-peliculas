import FormularioActores from "./FomularioActores";

export default function UpdateActores(){
    return(
    <>
        <h3>Editar Actores</h3>
        <FormularioActores  model={{nombre:'Jennifer Anisthons', 
                            fechaNacimiento: new Date('1980-06-01T00:00:00')}} 
                            onSubmit={valores => console.log(valores)}
             />
    </>
    )
}