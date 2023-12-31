import { useFormikContext } from "formik";
import MostrarErrorCampos from "./MostrarErrorCampos";


export default function FormGruopFecha(props: formGroupFechaProps){
    const {values, validateForm, touched, errors} = useFormikContext<any>()
    

    return(
        <div className="form-group">
            <label htmlFor={props.label}>{props.label}</label>
            <input type="date" className="form-control" 
                    id={props.campo}
                    name={props.campo}
                    defaultValue={values[props.campo]?.toLocaleDateString('en-CA')}
                    onChange={e=>{
                        const fecha= new Date(e.currentTarget.value + 'T00:00:00');
                        values[props.campo]=fecha;
                        validateForm();
                    }}                   
             /> 
            {touched[props.campo] && errors[props.campo] ?
            <MostrarErrorCampos mensaje={errors[props.campo]?.toString()!} /> : null}
                    
        </div>
    )
}

interface formGroupFechaProps{
    campo: string;
    label: string;
}


