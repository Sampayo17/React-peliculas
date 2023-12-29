import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./Peliculas.model"
import css from './ListadosPelicula.module.css'
import ListadoGenerico from "./utils/ListadoGenerico";

export default function ListaPeliculas(props: listaPeliculasProps) {


    return (
        <ListadoGenerico listado={props.ListaPeliculas}>
            <div className={css.div}>
                {props.ListaPeliculas?.map(pelicula => <PeliculaIndividual pelicula={pelicula}
                    key={pelicula.id}
                />)}
            </div>
        </ListadoGenerico>
    )

}

interface listaPeliculasProps {
    ListaPeliculas?: pelicula[];
}