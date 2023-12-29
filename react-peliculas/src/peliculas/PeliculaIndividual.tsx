import { pelicula } from "./Peliculas.model";
import css from './PeliculaIndividual.module.css';

export default function PeliculaIndividual (props: peliculaIndividualProps){

    const construirPelicula = () => `/pelicula/${props.pelicula.id}`

    return(
        <div className={css.div}> 
            <a href={construirPelicula()}>
            <img src={props.pelicula.poster} alt="Poster"/>    
             </a>
             <p>
                <a href={construirPelicula()}>{props.pelicula.titulo}</a>
             </p>

        </div>
    )

}

interface peliculaIndividualProps{
    pelicula: pelicula;
}