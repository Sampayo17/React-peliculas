import { Form, Formik, FormikHelpers } from "formik";
import FormGroupTex from "../utils/FormGruopText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from 'yup'
import { generoCreacionDTO } from "./GenerosModel";

export default function FormularioGenero(props: formularioGeneroProps) {
    return (

        <Formik initialValues={props.modelo}

            // probar la desactivacion del boton con un promise
            // onSubmit={values => {
            //     console.log(values)
            // }} //this is the origen

            onSubmit= {props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula().stringEmpty()
            })}
        >
            {/* accede a las propiedades de un componente desde afuera con renderprops  */}

            {(formikProps) => (
                <Form>
                    <FormGroupTex campo="nombre" label="nombre" placeholder="Nombre gènero" />

                    <Button disable={formikProps.isSubmitting}
                        type="submit" >Salvar</Button>
                    <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
                </Form>
            )}

        </Formik>

    )
}

interface formularioGeneroProps{
    modelo: generoCreacionDTO;
    onSubmit(Valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}