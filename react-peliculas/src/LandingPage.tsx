import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/Peliculas.model";

export default function LandingPage(props: any) {

    const [listaPeliculas, setPelicula] = useState<landingPageDTO>({})

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPelicula({
                enCartelera: [
                    {
                        id: 1, titulo: 'spider-Man: Far From home',
                        poster: "../assets/Spiderman.png"
                    },
                    {
                        id: 2, titulo: 'Cuentos que no son cuentos',
                        poster: "../assets/Cuentosquenosoncuentos.jpeg"
                    }
                ],
                proximosEstrenos: [
                    {
                        id: 3, titulo: 'Lilo y stitch',
                        poster: "../assets/liloystitch.jpeg"
                    }
                ]
            })
        }, 3000);

        //para no tener memory lit
        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>Peliculas en cartelera</h3>
            <ListadoPeliculas ListaPeliculas={listaPeliculas.enCartelera} />
            <h3>Proximos estrenos</h3>
            <ListadoPeliculas ListaPeliculas={listaPeliculas.proximosEstrenos} />
        </>
    )
}