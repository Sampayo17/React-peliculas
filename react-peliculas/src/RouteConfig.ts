import LandingPage from "./LandingPage";
import IndiceGenero from "./Generos/IndiceGenero";
import UpdateGenero from "./Generos/UpdateGenero";
import CreateGenero from "./Generos/CreateGenero";

import IndiceActores from "./Actores/IndiceActores";
import CreateActores from "./Actores/CreateActores";
import UpdateActores from "./Actores/UpdateActores";

import IndiceCine from "./Cines/IndiceCines";
import CreateCine from "./Cines/CreateCine";
import UpdateCine from "./Cines/UpdateCine";

import CreatePelicula from "./peliculas/CreatePelicula";
import UpdatePelicula from "./peliculas/UpdatePelicula";
import SearchPelicula from "./peliculas/SearchPeliculas";
import ReturnToLanding from "./peliculas/utils/ReturnToLanding";

const rutas = [
    {path: '/generos/create', componente: CreateGenero},
    {path: '/generos/update/:id(\\d+)', componente: UpdateGenero}, //Se agrega lo siguiente para crear variables de ruta || se agrega (\\d+) para indicar que es un numero el que se le pasa
    {path: '/generos', componente: IndiceGenero, exact:true},


    {path: '/actores/create', componente: CreateActores},
    {path: '/actores/update', componente: UpdateActores},
    {path: '/actores', componente: IndiceActores, exact:true},

    {path: '/Cines/create', componente: CreateCine},
    {path: '/Cines/update:id(\\d+)', componente: UpdateCine},
    {path: '/Cines', componente: IndiceCine, exact:true},

    {path: '/peliculas/create', componente: CreatePelicula},
    {path: '/peliculas/update:id(\\d+)', componente: UpdatePelicula},
    {path: '/peliculas/search', componente: SearchPelicula},

    {path: '/', componente: LandingPage, exact: true},


    //Este path evalua todas las rutas. Sirve para manejar el error 404 no found.
    //Debe ir siempre de ultimo, ya que se va evaluando cada ruta hasta conseguir una coincidencia 
    {path: '*', componente: ReturnToLanding}, 
]

export default rutas;