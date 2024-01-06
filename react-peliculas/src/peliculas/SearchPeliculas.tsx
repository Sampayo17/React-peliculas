import { Field, Form, Formik } from "formik";
import { generoDTO } from "../Generos/GenerosModel";
import Button from "../utils/Button";

export default function SearchPelicula() {

  //Se crea el objeto para tener valor inciales en el formulario de busqueda en el formik
  const valorIncial: filtroPeliculasForm = {
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  }

  //crear listado de genero en memoria
  const genero: generoDTO[] = [
    { id: 1, nombre: "Accion" },
    { id: 2, nombre: "Comedia" },
    { id: 3, nombre: "Romance" }
  ]

  return (
    <>
      <h3>Fitrar Peliculas</h3>

      <Formik initialValues={valorIncial}
        onSubmit={valores => console.log(valores)}
      >
        {(formikProps) => (
          <Form>
            <div className="form-inline">
              <div className="form-group mb-2">
                <label htmlFor="titulo" className="sr-only">Tìtulo</label>
                <input type="text"
                  className="form-control"
                  id="titulo"
                  placeholder="Título de la pelicula"
                  {...formikProps.getFieldProps('titulo')}
                />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <select className="form-control"
                  {...formikProps.getFieldProps('generoId')}
                >
                  <option value="0"> --Seleccione un género--</option>
                  {genero.map(genero => <option key={genero.id} value={genero.id}> {genero.nombre}</option>)}

                </select>

              </div>
              <div className="form-group mx-sm-3 mb-2">
                <Field className="form-check-input" id="proximosEstrenos"
                        name="proximosEstrenos" type="checkbox"/>
                        <label className="form-check-label" htmlFor="proximosEstrenos">Proximos estrenos</label>

              </div>
              <div className="form-group mx-sm-3 mb-2">
                <Field className="form-check-input" id="enCines"
                        name="enCines" type="checkbox"/>
                        <label className="form-check-label" htmlFor="enCines">En cines</label>

              </div>


              <Button className="btn btn-primary mb-2 mx-sm-3"
               onClick={() => formikProps.submitForm()}
              > Filtrar </Button>
              <Button className="btn btn-primary mb-2 mx-sm-3"
               onClick={() => formikProps.setValues(valorIncial)}
              > Limpiar </Button>
            </div>

          </Form>
        )}
      </Formik>
    </>
  )
}

interface filtroPeliculasForm {
  titulo: string;
  generoId: number;
  proximosEstrenos: boolean;
  enCines: boolean;
}