import FormularioActores from "./FomularioActores";

export default function CreateActores(){
    return(
        <>
          <h3>Crear Actores</h3>
          <FormularioActores model={{nombre:'', fechaNacimiento: undefined}} onSubmit={valores => console.log(valores)} />
        </>
    )
}