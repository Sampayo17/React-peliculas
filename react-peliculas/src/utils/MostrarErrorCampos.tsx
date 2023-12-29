export default function MostrarErrorCampos (props: mostrarErrorCampos){
    return(
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostrarErrorCampos{
    mensaje: string;
}