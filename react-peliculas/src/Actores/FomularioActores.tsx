import { Form, Formik, FormikHelpers } from "formik";
import { actorCreacionDTO } from "./actores.model";
import FormGroupTex from "../utils/FormGruopText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import FormGruopFecha from "../utils/FormGroupFecha";

export default function FormularioActores(props: formularioActoresProps) {
    return(
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula().stringEmpty(),
                fechaNacimiento: Yup.date().nullable().required('Este campo es requerido')
            })}

        >
            {(formikProps) => (
                <Form>
                    <FormGroupTex campo={"nombre"} label="Nombre" />
                    <FormGruopFecha label="Fecha de nacimiento" campo="fechaNacimiento"></FormGruopFecha>


                    <Button disable={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondaty" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>

    )

}

interface formularioActoresProps{
    model: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
 }