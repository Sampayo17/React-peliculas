import { ErrorMessage, Field } from "formik";
import MostrarErrorCampos from "./MostrarErrorCampos";

export default function FormGroupTex(props: formGroupTextProps) {
    return (
        <div className="form-group">
            {props.label ? <label htmlFor={props.campo}>{props.label}</label>: null}
            <Field name={props.campo} className="form-control"  placeholder={props.placeholder} />
            <ErrorMessage name={props.campo}>{mensaje =>
               <MostrarErrorCampos mensaje={mensaje}/>
            }</ErrorMessage>
        </div>
    )
}


interface formGroupTextProps{
    campo: string;
    label?: string;
    placeholder?: string;
}