import { NavLink } from "react-router-dom";

export default function Menu() {
    
    const classActive= "active";
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={classActive} to="/"> React Peliculas</NavLink>
                <div className="collapse navbar-collapse ">
                    <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/actores">
                                Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/cines">
                                Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/generos">
                                Generos
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/peliculas/create">
                                Crear Pelicula
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/peliculas/search">
                                Filtro Pelicula
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}